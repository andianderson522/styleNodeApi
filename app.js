/**
 * New node file
 */
var express = require('express');
var http = require('http');

var app = express();

app.set('port', process.env.PORT || 8080);
app.get('/', function(request, response) {
	response.setHeader("Content-Type", "application/json");
	response.send(200, '{"a":"b"}');
});
http.createServer(app).listen(app.get('port'), function() {
	console.log('Express server listening on port ' + app.get('port'));
});
