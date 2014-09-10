'use strict';

var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    PORT = 8080;

app.use(bodyParser.json());

app.use(express.static(__dirname)); //Monumentally stupid to do in a production app!!!
app.use('/js', express.static(__dirname + '/../src/'));
app.use('/bower_components', express.static(__dirname + '/../bower_components'));

app.post('/logging', function (req) {
    var prettyPrintJson = JSON.stringify(req.body, undefined, 2);

    console.log('\n############## Reseived this on the "/logging" endpoint: ##############\n');
    console.log(prettyPrintJson + '\n');
});

app.listen(PORT);
console.log('Open your browser to http://localhost:' + PORT + '/ to see the example');
