var fs = require('fs');

var buf = fs.readdir(process.argv[2], function(err, files) {
	
	files.forEach(function(file){
		if (file.endsWith('.' + process.argv[3])) {
			console.log(file);
		}
	});
});

String.prototype.endsWith = function(suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1; 
};

