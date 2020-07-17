let mysql = require('mysql');
let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
    
connection = mysql.createConnection({
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
}
module.exports = connection;