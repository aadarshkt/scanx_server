import mysql from "mysql2/promise";
import pkg from "pg";
const { Pool } = pkg;
import dotenv from "dotenv";
dotenv.config();

const db_config = {
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.NAME,
  password: process.env.PASSWORD,
  port: process.env.DB_PORT,
  ssl: true,
};

async function query(sqlquery, params) {
  try {
    //create new connection.
    const pool = new Pool(db_config);
    // Handling connection success
    pool.on("connect", () => {
      console.log("Connected to PostgreSQL database");
    });

    // Handling connection errors
    pool.on("error", (err) => {
      console.error("Error connecting to PostgreSQL database:", err);
    });

    //executed the query.
    const result = await pool.query(sqlquery, params);
    pool.end();
    return result.rows;
  } catch (error) {
    throw new Error("error executing query " + error);
  }
}

export default query;
