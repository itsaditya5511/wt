var http = require('http')
var SI = require('./InterestCal')
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type': 'text/plain'})
  response.write('Simple Intrest is '+SI.simpleIntrest(50000,8,3))
  response.end()

}).listen(8081);

