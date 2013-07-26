var express = require('express');

var app = express.createServer(express.logger());
var fs = require('fs');
var content = fs.readFileSync('bitstarter-hw4.html','utf-8');

app.get('/', function(request,response){
response.send(content);
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
    console.log("Listening on " + port);
});
