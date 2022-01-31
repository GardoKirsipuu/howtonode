var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("<h2>Praegune kuupaev ja kell on: <h2>" + dt.myDateTime());
  res.end();
}).listen(8080);