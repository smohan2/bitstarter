var fs = require('fs');
var FILE_DEFAULT = "index.html";

var message = function (file) {
file = file || FILE_DEFAULT;
var buffer = fs.readFileSync(file);
return (buffer.toString('utf-8'));
}
