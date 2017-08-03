let mysql = require("mysql");
    
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"",
    database:"exp",
    port:3306
});

function query(sql,callback){
    pool.getConnection(function(err,connection){
        connection.query(sql, function (err,rows) {
            callback(err,rows);
            connection.release();
        });
    });
}

module.exports = pool;

//var mysql = require('mysql');
//var conn = mysql.createConnection({
//    host: 'localhost',
//    user: 'root',
//    password: '',
//    database:'exp',
//    port: 3306
//});
//conn.connect();
//
// conn.query('SELECT * from user where name="111"', function(err, result) {
//     if (err) throw err;
//     console.log(result);
// })