var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

mongoose.set('useCreateIndex', true)
mongoose.connect('mongodb://localhost/isQED', { useNewUrlParser: true });

var geese = require("./server/config/mongoose.js");// array of required mongoose models
require('./server/config/routes.js')(app, geese);

// Setting our Server to Listen on Port: 8000
app.listen(8000, function () {
    console.log("SY listening on port 8000");
})
