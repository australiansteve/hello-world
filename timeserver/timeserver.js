var net = require('net');

function zeroFill(x) {
	if (x < 10)
		return "0" + x;
	return x;
}

function now() {
	var date = new Date();

	var year = date.getFullYear();
	var month = zeroFill(date.getMonth() + 1);
	var day = zeroFill(date.getDate());
	var hours = zeroFill(date.getHours());
	var minutes = zeroFill(date.getMinutes());

	return year + "-" + month + "-" + day + " " + hours + ":" + minutes;
}

var server = net.createServer(function(socket){
	socket.end(now() + "\n");
});

server.listen(process.argv[2]);