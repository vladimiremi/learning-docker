const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
  host: "172.17.0.4",
  user: "root",
  password: "123456",
  database: "programadorabordo",
});

connection.connect();

app.get("/products", function (req, res) {
  connection.query("SELECT * FROM products", function (error, results) {
    if (error) throw error;
    res.send(results.map((item) => ({ name: item.name, price: item.price })));
  });

  res.send();
});

app.listen(9001, "0.0.0.0", function () {
  console.log("Listening on port 3000");
});
