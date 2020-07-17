let connection = require('../config/connection');

function createQmarks(num){
    let array = [];
    for (let i = 0; i < num.length; i ++){
        array.push('?');
    }
    return array.toString();
};

function translateSql(ob){
    let array = [];
    for (let key in ob) {
        let value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indexOf('') >= 0) {
                value = "'" + value + "'";
            }
            array.push(key + "=" + value)
        }
    }
    return array.toString();
};

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
        
        connection.query(dbQuery, function(error, response){
            if (error) {
                console.log(error);
            }
            cb(response);
        });
    
    },
deleteOne: function(table, condition, cb){
        let dbQuery = 'DELETE FROM' + table + 'WHERE' + condition;

        console.log(dbQuery);
        connection.query(dbQuery, function(error, response){
            if (error) {
                console.log(error);
            }
            cb(response);
        });
    
    }
};
module.exports = orm;