const express = require('express');
const app = express();

const trailersController = require('./components/trailers/trailersController');
app.use('/trailer', trailersController);

module.exports = app;