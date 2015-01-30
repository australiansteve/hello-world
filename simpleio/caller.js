var worker = require('./worker.js');

worker(process.argv[2], process.argv[3], function(err, files) {
	files.forEach(function(file){
		console.log(file);
	});
});



//files.forEach(function(file){
//	console.log(file);
//});