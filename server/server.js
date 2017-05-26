var http = require("http");
var sserver = require("node-static");
var file = sserver.Server(".");

http.createServer(function(req, res) {
  file.serve(req, res);
}).listen(8081);

console.log("Server running on port 8081");
 
