var express = require('express');
var mysql = require('mysql');
var db = require('./dbConnection');
var session = require('express-session');
var flash = require('express-flash');
var path = require('path');
var app = express();
var bp = require('body-parser');
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.use(flash());
app.use(session({
    secret: '1234sctx', 
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 70000 }
}));
app.get('/', (req, res) =>{
    res.sendFile(__dirname + '/login.html');
});
app.post('/auth',(req, res)=> {
    let username = req.body.username;
    let password = req.body.password;
    if (username && password) {
        db.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password],  (error, results)=> {
            if (error) {
                throw error;
            }
            if (results.length > 0) {
                req.session.loggedin = true;
                req.session.username = username;
                res.redirect('/register');
            }
            else {
                res.send('INCORRECT credentials');
            }
            res.end();
        });
    }
    else {
        res.send('Please Enter UserName And Password!');
        res.end();
    }
});
app.get('/register',(req, res)=> {
    if (req.session.loggedin) {
        res.sendFile(__dirname + '/register.html');
    } else {
        res.send('Please Login')
    }
});
app.post('/formSubmit',(req, res)=>{
    if (req.session.loggedin) {
        var name = req.body.name;
        var date = req.body.date;
        var gender = req.body.gender;
        var cls = req.body.cls;
        var regCode = req.body.regCode;
        var sql = `INSERT INTO register(name,date,gender,cls,regCode) values("${name}", "${date}", "${gender}", "${cls}", "${regCode}")`;
        db.query(sql, (err, result)=> {
            if (err) {
                throw err;
            }
            console.log('RECORD INSERTED');
            req.flash('success', 'DATA ADDED SUCESSFULLY');
            res.redirect('/register');
        });
    }
    else {
        res.send('PLEASE LOGIN TO VIEW THIS PAGE');
    }
});
app.get('/logout',(req, res)=> {
    req.session.destroy(() => {
        res.redirect('/thankYou')
    });
});
app.get('/thankYou', (req, res) => {
    res.sendFile(path.join(__dirname, 'thankYou.html'));
});
app.listen(5000, () => {
    console.log("SERVER IS RUNNING")
})