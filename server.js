var http = require("http");
var tasks = require("./tasks");

http.createServer(function(request, response) {
  response.writeHead(200, {"Content-type": "text/plain"});
  response.write(tasks.task);
  response.end();
}).listen(3000);
