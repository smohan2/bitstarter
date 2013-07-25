var fs = require('fs');
var FILE_DEFAULT = "index.html";

var message = function (file) {
file = file || FILE_DEFAULT;
var buffer = new Buffer(fs.readFileSync(file));
return (buffer.toString());
}

sometext = 'TEXT'
app.get('/', function(request, response) {
  response.send(sometext +'');
});
