const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server");
});

module.exports = connection;
