var port = 1337;
var connect = require('connect');
var app = connect();

var logger = function(req, rews, next) {
	console.log(req.method, req.url);
	next();
};

var howdyWorld = function(req, res, next) {
	res.setHeader('Content-Type', 'text/plain');
	res.end('Howdy World');
};

app.use(logger);
app.use('/howdy', howdyWorld);

app.listen(port);

console.log('Our awesome web server running at http://localhost:' + port);