/*
** author: Fulin Shen
** created on: June 12, 2016
** description:
**/

var express = require('express');
var mongoose = require('mongoose');
var inventoryRouter = require('./routes/inventoryRoutes');

var app = express();
var locationsDB = mongoose.connect('mongodb://localhost/inventoryLocAPI');

app.use(express.static('public'));
app.use('/locations', inventoryRouter);

app.listen(3000, function() {
  console.log('listening on port 3000');
});
