const mysql2 = require("mysql2");

const connection = mysql2.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "employees",
});

connection.connect((err) => {
    console.log("err", err);
  if (err) {
    throw err;
  }
});

module.exports = connection;
