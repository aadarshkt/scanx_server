import mysql from "mysql2/promise";

async function query(sql, params) {
  const connection =
    await mysql.createConnection({
      host: process.env
        .MYSQL_ADDON_HOST,
      user: process.env
        .MYSQL_ADDON_USER,
      password:
        process.env
          .MYSQL_ADDON_PASSWORD,
      database:
        process.env.MYSQL_ADDON_DB,
    });
  // const connection =
  //   await mysql.createConnection({
  //     host: "localhost",
  //     user: "root",
  //     database: "scanx_database",
  //   });
  const [results] =
    await connection.execute(
      sql,
      params
    );

  return results;
}

export default query;
