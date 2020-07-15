let connection = require('../config/connection');

let orm = {
    selectAll: function(table, cb) {
        let dbQuery = 'SELECT * FROM' + table + ';';
        connection.query(dbQuery, function(error, response){
            if (error){
                console.log(error);
            }
            cb(response)
        });
    },
insertOne: function(table, cols, vals, cb) {
    let dbQuery ='INSERT INTO' + table + '(' + cols.toString() + ')' + 'VALUES (' + createQmarks(vals.length) + ')';
    
    console.log(dbQuery);
    connection.query(dbQuery, vals, function(error, response){
        if (error) {
            console.log(error);
        }
        cb(response);
    });
    },
updateOne: function(table, objCalVals, condition, cb){
        let dbQuery = 'UPDATE' + table + 'SET' + translateSql(objCalVals) + 'WHERE' + condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(error, response){
            if (error) {
                console.log(error);
            }
            cb(response);
        });
    
    },
deleteOne: function(table, condition, cb){
        let dbQuery = 'DELETE FROM' + table + 'WHERE' + condition;

        console.log(dbQuery);
        connection.query(dbQuery, vals, function(error, response){
            if (error) {
                console.log(error);
            }
            cb(response);
        });
    
    }
};