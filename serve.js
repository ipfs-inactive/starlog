
var request = require('request')
var express = require('express')
var serveStatic = require('serve-static')

var app = express()

app.use(serveStatic(__dirname))

app.use('/api', function(req, res) {
  var url = 'http://localhost:5001/api' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.use('/ipfs', function(req, res) {
  var url = 'http://localhost:5001/ipfs' + req.url;
  req.pipe(request(url)).pipe(res);
});

app.listen(8082)
