let express = require('express');
let app = express();
let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Rebirth03',
    database: 'burgers_db'
});
connection.connect(function(error){
    if (error){
        console.log('error connecting: ' + error.stack);
    }
    console.log('connected with Id' + connection.threadId);
});
module.exports = connection;