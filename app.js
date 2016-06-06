var express = require('express');
var app = express();

app.get('/', function(req,res) {
	res.send('Hello World!');
});

app.listen(8080,'0.0.0.0',function() {
	console.log('App listening on port 8080!');
});
