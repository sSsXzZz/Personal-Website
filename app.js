var express = require('express');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000; // necessary for heroku

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/*', function(req,res) {
	var checkFavicon = req.url.match(/favicon/);
	if (checkFavicon) return;

	var view = ( req.url === '/'
		? 'index'
		: req.url
	);
	res.render( path.join('pages/', view) );
});

app.listen(port,function() {
	console.log('App listening on port ' + port + '!');
});
