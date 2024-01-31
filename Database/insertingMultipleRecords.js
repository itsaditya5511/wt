var mysql = require('mysql');
 var con = mysql.createConnection({
host: 'localhost', user: 'root', password: '', database: 'empDB1' });
con.connect(function(err) {
if (err) {
throw err;
}
console.log('Connected to MySQL database');
var sql = 'INSERT INTO empinfo (id, fname, lname, address, salary) VALUES ?';
var records = [
[1, 'John', 'Doe', '123 Main Street', 50000], [2, 'Jane', 'Smith', '456 Elm Street', 60000], [3, 'Peter', 'Jones', '789 Oak Street', 70000]
];
con.query(sql, [records], function(err, result) {
if (err) {
throw err;
}
console.log('Number of records inserted:', result.affectedRows);
});
});
