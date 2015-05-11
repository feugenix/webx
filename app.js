var http = require('http'),
    JSX = require('node-jsx').install({ extension: '.jsx' }),
    main = require('blocks/main/main.jsx');

var port = process.env.PORT || 5000;

var reqHandler = function(request, response) {
    http
        .get('http://webx.mishanga.ru/', function(webxResponse) {
            var data = '';

            webxResponse.setEncoding('utf8');
            webxResponse.on('data', function (chunk) {
                data += chunk;
            });

            webxResponse.on('end', function() {
                var jsonData;

                try {
                    jsonData = JSON.parse(data);
                } catch(e) {}

                if (!jsonData) {
                    return sendError('data isn\'t json');
                }

                response.writeHead(200, {'Content-Type': 'text/plain'});
                response.end(main(jsonData));
            });
        })
        .on('error', function() {
            sendError('webx.mishanga.ru is down');
        });
};

var sendError = function(err) {
    response.writeHead(500, {'Content-Type': 'text/plain'});
    response.end('webx.mishanga.ru is down');
};

http
    .createServer(reqHandler)
    .listen(port);
