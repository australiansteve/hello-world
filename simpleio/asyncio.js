var fs = require('fs');

var buf = fs.readFile(process.argv[2], function(err, data) {
	var bufArray = data.toString().split('\n');

	console.log(bufArray.length - 1);
});

