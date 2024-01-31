var mysql = require('mysql');
var con = mysql.createConnection({
host: 'localhost', user: 'root', password: '', database: 'empDB1' });
con.connect(function (err) {
if (err) throw err;
console.log('Connected to MySQL database');
var sql1 = 'DROP TABLE empinfo';
con.query(sql1, function (err, result) {
if (err) throw err;
console.log('Table empinfo deleted successfully...');
});
});
