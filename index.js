import express from "express";
import { createConnection } from "mysql2";
import studentsRouter from "./routes/studentsRoutes.js";
import locationRouter from "./routes/locationRoutes.js";
import cors from "cors";
const port = process.env.PORT || 8080;
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
// app.use(bodyParser.json());

const connection = createConnection({
  host: process.env.MYSQL_ADDON_HOST,
  user: process.env.MYSQL_ADDON_USER,
  password:
    process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB,
});

// const connection = createConnection({
//   host: "localhost",
//   user: "root",
//   database: "scanx_database",
// });

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

//register
app.post(
  "/register",
  async (req, res) => {
    try {
      const { email, password } =
        req.body;
      const hashedPassword =
        await bcrypt.hash(password, 10);
      const registerQuery =
        "INSERT INTO students (email, hashedpassword) VALUES (?, ?)";
      await query(registerQuery, [
        email,
        hashedPassword,
      ]);
      const searchEmail =
        "SELECT * FROM students WHERE email = ?";
      const rows = await query(email, [
        email,
      ]);
      const token = generateToken(rows);
      console.log(
        "Student registered successfully"
      );
      return res
        .status(200)
        .json({
          token,
        })
        .send(
          "student registered successfully"
        );
    } catch (e) {
      console.error(
        "Error registering student" +
          error.stack
      );
      return res
        .status(500)
        .send(
          "Error registering student"
        );
    }
  }
);

app.post("/login", async (req, res) => {
  try {
    const { email, password } =
      req.body;
    const searchEmail =
      "SELECT * FROM students WHERE email = ?";
    const rows = await query(
      searchEmail,
      [email]
    );
    if (rows.length == 0) {
      console.log(
        "Error finding the email"
      );
      return res.status(401).json({
        error: "Email is wrong",
      });
    }
    const isPasswordValid =
      await bcrypt.compare(
        password,
        rows.hashedpassword
      );
    if (!isPasswordValid) {
      console.error(
        "The password is not valid"
      );
      return res.status(401).json({
        error: "Password is wrong",
      });
    }
    const token = generateToken(rows);
    return res
      .status(200)
      .json({ token });
  } catch (error) {
    console.error("Error logging in");
    return res.status(500).json({
      error: "Authentication failed",
    });
  }
});

app.post("/verify", (req, res, next) =>
  verifyToken(req, res, next)
);

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
    }
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
