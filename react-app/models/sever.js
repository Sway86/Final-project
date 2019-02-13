var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 8080,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "trello.db"
});

connection.connect(function (err) {
    if (err) throw err;
    runSearch();
});