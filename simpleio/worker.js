module.exports = function(directory, extension, callback) {
	var fs = require('fs');
	
	var filenames = new Array();

	fs.readdir(directory, function(err, files) {
		
		if(err) {
			return callback(err);
		}

		var suffix = String('.' + extension);
		files.forEach(function(file){
			if (file.endsWith(suffix)) {
				filenames.push(file);
			}
		});

		return callback(null, filenames);
	});

}

String.prototype.endsWith = function(suffix) {
	return this.indexOf(suffix, this.length - suffix.length) !== -1; 
};


