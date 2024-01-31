const express = require('express');
var app = express();
app.get('/register', function (req, res) {
res.sendFile(__dirname + '/register.html');
});
app.get('/formSubmit', function (req, res) {
const name = req.query.name;
const city = req.query.city;
res.send('Your Name is ' + name + ' and Your city is ' + city);
});
app.listen(7090);
