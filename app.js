var http = require('http'),
    React = require('react'),
    JSX = require('node-jsx').install();

var port = process.env.PORT || 5000;

http
    .createServer(reqHandler)
    .listen(port);


var reqHandler = function(req, res) {
    http
        .get('http://webx.mishanga.ru/', function(result) {
            res.writeHead(200, {'Content-Type': 'text/plain'});
            res.end(result);
        })
        .on('error', function() {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end('webx.mishanga.ru is down');
        });
};
