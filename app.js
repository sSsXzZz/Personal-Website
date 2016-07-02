var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000; // necessary for heroku

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', function(req,res) {
	res.render('pages/index');
});

app.listen(port,function() {
	console.log('App listening on port ' + port + '!');
});
