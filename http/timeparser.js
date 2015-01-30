var http = require('http');
var url = require('url');

function sendResponse(response, data) {
	response.writeHead(200, {"Content-Type": "application/json"});
	response.write(data);
  	response.end();
}

var server = http.createServer(function(request, response){

	if (url.parse(request.url, true).pathname === '/api/parsetime')
	{
		var d = new Date(url.parse(request.url, true).query.iso);

		var ret = {};
		ret["hour"] = d.getHours();
		ret["minute"] = d.getMinutes();
		ret["second"] = d.getSeconds();

		sendResponse(response, JSON.stringify(ret));

	}
	else if (url.parse(request.url, true).pathname === '/api/unixtime')
	{
		var d = Date.parse(url.parse(request.url, true).query.iso);

		var ret = {};
		ret["unixtime"] = d;

		sendResponse(response, JSON.stringify(ret));
	}
	else
	{
		sendResponse(response);
	}


});

server.listen(process.argv[2]);

