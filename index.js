var express = require('express');
var app = express();
var path = require("path");
var PythonShell = require('python-shell');

app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/'));


app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/prediction?', function(request, response) {
    var query = request._parsedUrl.query;
    // console.log(query);
    var pyshell = new PythonShell('HW.py', {
        mode: 'text'
    });
    var count = 0;
    pyshell.send(query);
    pyshell.on('message', function (message) {
        console.log(message);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(String(message)+'\n');
    }).on('close', function () {
    }).end();
});

app.get('/statesprediction?', function(request, response) {
    var query = request._parsedUrl.query;
    // console.log(query);
    var pyshell = new PythonShell('states.py', {
        mode: 'text'
    });
    var count = 0;
    pyshell.send(query);
    pyshell.on('message', function (message) {
        console.log(message);
        response.writeHead(200, {'Content-Type': 'text/plain'});
        response.end(String(message)+'\n');
    }).on('close', function () {
    }).end();
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


