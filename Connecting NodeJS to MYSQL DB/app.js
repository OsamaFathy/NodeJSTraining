/**
 * Created by Osama on 8/18/2016.
 *
 * Connecting to a local mysql db
 */

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin",
    database: "sitepoint"

});

connection.connect();

connection.query('SELECT * FROM employees', function (err, rows) {
    if (err)
        throw err;
    console.log("Data reciever");
    console.log(rows);
})