var express = require('express');
var app = express();
var beers = 100;
app.get('/', function (req, res) {
  beers = beers - 1;
  res.send(beers + ' beers on the wall.');
});

app.listen(8080);