var http = require('http')

http.createServer(function (req, res) {
  res.write();
  res.end("hello world");
}).listen(3000)