var express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
app.use(express.static(path.join(__dirname,'public')));

app.listen(process.argv[2]);