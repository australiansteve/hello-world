var http = require('http');
var fs = require('fs');

var server = http.createServer(function(request, response){

	fs.createReadStream(process.argv[3]).pipe(response);

});

/*
var server = http.createServer(function(request, response){

	fs.createReadStream(process.argv[3]).on('readable', function() {
		var chunk;
		var data = "";
		while (null !== (chunk = this.read())) {
			data += chunk;
		}

		response.writeHead(200, {
		  'Content-Length': data.length,
		  'Content-Type': 'text/plain' });
		
		response.end(data);
	});

});
*/

server.listen(process.argv[2]);