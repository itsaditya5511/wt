var http = require('http');  
var fs = require('fs');
http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type':'text/plain'});
    txt1 = 'This is demo file';
    fs.writeFile('demo.txt', txt1, function(err){
        if(err){throw err;}
        console.log('File is created');
    })
    
    fs.readFile('demo.txt', 'utf8', function(err, data){
        if(err){throw err;}
        console.log("Reading file........");
        console.log(data);
    })
    res.write('File is created.....');
    res.end();
}).listen(8083);