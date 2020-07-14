require('dotenv').config();
let mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} 
else {
    connection = mysql.createConnection({
        host:'localhost',
        port:'3306',
        user:'root',
        password:'@Rebirth03',
        database:'burger_db',
        });    
}

connection.connect(function(error) {
    if (error) {
        console.log(error);
        return;
    }
    console.log('Connected with ID' + connection.threadId);
});
module.exports = connection;