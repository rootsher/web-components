var express = require('express');
var app = express();

var host = '127.0.0.1';
var port = 3001;

app.use(express.static('test'));

console.log('>', host + ':' + port);

app.listen(port);