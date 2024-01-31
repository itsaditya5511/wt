var mysql = require('mysql');
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database:'student1'
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    sql = 'insert into student(id,fname,lname,rollno) values(1,"Yash","Limaye",12)'
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Value inserted");
      console.log(result);
    });
  });