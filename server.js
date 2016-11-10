//Dependencies
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');


//Middleware
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(express.static('public'));


//Database configuration
var options = { server: { socketOptions: { keepAlive: 300000, connectTimeoutMS: 30000 } }, 
                replset: { socketOptions: { keepAlive: 300000, connectTimeoutMS : 30000 } } };       
 
var mongodbUri = 'mongodb://mamunnyc:nitu143m@ds053146.mlab.com:53146/myklovrinmate';
 
mongoose.connect(mongodbUri, options);
var conn = mongoose.connection;             
 
conn.on('error', console.error.bind(console, 'connection error:'));  
 
conn.once('open', function() {
  // Wait for the database connection to establish, then start the app.                         
});

// mongoose.connect('mongodb://mamunnyc:nitu143m@ds053146.mlab.com:53146/myklovrinmate');
// var db = mongoose.connection;

// db.on('error', function(err) {
//     console.log('Mongoose Error: ', err);
// });
// db.once('open', function() {
//     console.log('Mongoose connection successful.');
// });


//Require Schemas
var Inmate = require('./models/inmate.js');
// var Article = require('./models/Article.js');


// Routes
app.get('/', function(req, res) {
    res.send(index.html);
});




//Server connection
app.listen(3000, function() {
    console.log('App running on port 3000!');
});