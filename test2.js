var app = require('express')();
app.get('/fail', function(req, res) {
	throw new Error('Nope!');
});
app.listen(3000, function() {
	console.log('listening on 3000');
});
