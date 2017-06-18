var http = require('http');
var express = require('express');
var app = express();


app.use('/js', express.static('./js'));
app.use('/views', express.static('./views'));
app.use('/css', express.static('./css'));


app.listen(7878, function() {
    console.log('server listening at http://localhost:7878');
});


app.get('/', function(req, resp) {
    resp.sendFile(__dirname + '/index.html');
})