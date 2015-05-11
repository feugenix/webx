var http = require('http'),
    React = require('react'),
    JSX = require('node-jsx').install();

var port = process.env.PORT || 5000;

var reqHandler = function(request, response) {
    http
        .get('http://webx.mishanga.ru/', function(webxResponse) {
            var data = '';
            response.writeHead(200, {'Content-Type': 'text/plain'});

            webxResponse.setEncoding('utf8');
            webxResponse.on('data', function (chunk) {
                data += chunk;
            });

            webxResponse.on('end', function() {
                response.end(data);
            });
        })
        .on('error', function() {
            response.writeHead(500, {'Content-Type': 'text/plain'});
            response.end('webx.mishanga.ru is down');
        });
};

http
    .createServer(reqHandler)
    .listen(port);
