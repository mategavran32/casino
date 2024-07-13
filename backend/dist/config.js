const mysql = require("mysql2");
require("dotenv").config();

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) {
    console.error("Database connection failed: " + err.stack);
    return;
  }
  console.log("Connected to database.");

  connection.query("USE casino", (err, result) => {
    if (err) {
      console.error("Error selecting casino database:", err);
      return;
    }
    console.log("Selected casino database.");
  });
});

module.exports = connection;