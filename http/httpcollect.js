var http = require('http');

http.get(process.argv[2], function callback(response) {

	response.setEncoding('utf8');
	var str = '';
	var len = 0;

	response.on("data", function(data) {
		//console.log(data);
		len += data.length;
		str += data;
	});

	response.on("error", function(err) {
		console.error("Error" + err);
	});

	response.on("end", function() {
		console.log(len);
		console.log(str);
	});
});
