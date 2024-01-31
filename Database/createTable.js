var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'student1'
});
con.connect(function(err) {
    if(err){throw err;}
    sql = 'create table student(id int(15) primary key, fname varchar(20),lname varchar(20),rollno int(10))'
    con.query(sql,function(err){
        if(err){throw err}
        console.log('Table created');
    });
});