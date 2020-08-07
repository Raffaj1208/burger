var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    
connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '@Rebirth03',
    database: 'burgers_db'
});
};

connection.connect(function(error){
    if (error){
        console.log("Error" + error.stack);
        return;
    }
    console.log('Connected as ' + connection.threadId);
});
module.exports = connection;