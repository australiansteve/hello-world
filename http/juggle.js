var http = require('http');

var callbacks = 0;
var responses = {};

function httpGet(index) {

	http.get(process.argv[2 + index], function callback(response) {

		response.setEncoding('utf8');
		var str = '';
		
		response.on("data", function(data) {
			//console.log(data);
			str += data;
		});

		response.on("error", function(err) {
			console.error("Error" + err);
		});

		response.on("end", function() {
			callbacks++;
			responses[index] = str;

			if (callbacks == 3)
			{
				for (i=0; i<3; i++) {
					console.log(responses[i]);
				}
			}
		});
	});
}

for (i=0; i<3; i++) {
	httpGet(i);
}