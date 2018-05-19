var express = require('express');
var app = express();

var trailersController = require('./components/trailers/trailersController');
app.use('/trailer', trailersController);

module.exports = app;