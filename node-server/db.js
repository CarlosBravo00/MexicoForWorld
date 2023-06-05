const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb",
  multipleStatements: true,
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connected to MySQL server");
});

const executeQuery = (query, values) => {
  return new Promise((resolve, reject) => {
    connection.query(query, values, (err, results) => {
      if (err) reject(err);
      else resolve(results);
    });
  });
};

module.exports = {
  connection,
  executeQuery,
};
