import express from "express";
import dotenv from "dotenv";
import { createConnection } from "mysql2";
import studentsRouter from "./routes/studentsRoutes.js";
import locationRouter from "./routes/locationRoutes.js";
import cors from "cors";
import {
  generateToken,
  verifyToken,
} from "./middleware/token.js";
import query from "./config/db.js";
import bcrypt from "bcrypt";

const app = express();

app.use(cors());
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

dotenv.config();
const port = process.env.PORT;

// const connection = createConnection({
//   host: process.env.MYSQL_ADDON_HOST,
//   user: process.env.MYSQL_ADDON_USER,
//   password:
//     process.env.MYSQL_ADDON_PASSWORD,
//   database: process.env.MYSQL_ADDON_DB,
// });

const connection = createConnection({
  host: "localhost",
  user: "root",
  database: "scanx_database",
});

// Connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error(
      "Error connecting to the database: " +
        err.stack
    );
    return;
  }
  console.log(
    "Connected to the database as ID " +
      connection.threadId
  );
});

app.post("/login", async (req, res) => {
  try {
    const { email, password } =
      req.body;
    console.log(email, password);
    const searchEmail =
      "SELECT * FROM students WHERE email = ?";
    const rows = await query(
      searchEmail,
      [email],
      res
    );
    if (rows.length == 0) {
      console.log(
        "Error finding the email"
      );
      return res.status(401).json({
        error:
          "Unauthorised access, Invaild email",
      });
    }
    const isPasswordValid =
      await bcrypt.compare(
        password,
        rows[0].hashedpassword
      );
    if (!isPasswordValid) {
      console.error(
        "The password is not valid"
      );
      return res.status(401).json({
        error:
          "Invalid authentication credentials",
      });
    }
    const token = generateToken(
      rows[0]
    );
    //Todo hashedPassword is also being sent. Although no one
    //can actually decrypt it as secret key is on the server.
    return res.status(200).json({
      token,
      userData: rows[0],
    });
  } catch (error) {
    console.error(
      "Error logging in" + error
    );
    return res.status(500).json({
      error: "Authentication failed",
    });
  }
});

// Define a route handler for the root path
app.get("/", async (req, res) => {
  // Execute a query
  await query(
    "SELECT * FROM students",
    (error, results) => {
      if (error) {
        console.log(
          "Error executing MySQL query: " +
            error.stack
        );
        return res
          .status(500)
          .send(
            "Error executing MySQL query."
          );
      }

      res.json(results);
    },
    res
  );
});

app.use("/students", studentsRouter);
app.use("/location", locationRouter);

// Start the server
app.listen(port, () => {
  console.log(
    `Server listening on port ${port}`
  );
});
