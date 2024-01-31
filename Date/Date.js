var http = require('http');
var date = require('./DateModule')
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'});
  response.write('Date is '+date.mydate())
  response.end();
}).listen(8081);
