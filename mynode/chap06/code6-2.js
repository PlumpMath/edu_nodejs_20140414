/**
 * New node file
 */
var server = require('http').createServer(function (request, response) {
	response.writeHead(200,{'Content-Typ': 'text/html'});
	response.end('<h1>Hello</h1>');
}).listen(52273);

setTimeout(function() {
	server.close();
}, 10000);