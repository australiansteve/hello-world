var fs = require('fs');

var buf = fs.readFileSync("./testfile.txt");
var buf = fs.readFileSync(process.argv[2]);

var bufArray = buf.toString().split('\n');

console.log(bufArray.length - 1);