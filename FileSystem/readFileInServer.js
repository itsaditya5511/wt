var http = require('http');  
var fs = require('fs');

fs.readFile('demo.txt', 'utf8', function(err, data){
    if(err){throw err;}

    http.createServer(function(req, res){
        res.writeHead(200, {'Content-Type':'text/plain'});
        res.write('Server is created.....');
        res.write(data);
        res.end();
    }).listen(8083)
});

