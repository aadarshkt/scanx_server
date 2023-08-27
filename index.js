import express from "express";
import { createConnection } from "mysql2";
import studentsRouter from "./routes/studentsRoutes.js";
import locationRouter from "./routes/locationRoutes.js";
// import bodyParser from "body-parser";
import cors from "cors";
const port = process.env.PORT || 8080;

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
  user: process.env.PMYSQL_ADDON_USER,
  database: process.env.MYSQL_ADDON_DB,
  password:
    process.env.MYSQL_ADDON_PASSWORD,
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

// Define a route handler for the root path
app.get("/", (req, res) => {
  // Execute a query
  connection.query(
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

// Use the students router
app.use("/students", studentsRouter);
app.use("/location", locationRouter);

// Start the server
app.listen(port, () => {
  console.log(
    `Server listening on port ${port}`
  );
});
