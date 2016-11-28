var express = require('express');
var app = express();
var mongoose = require('mongoose');



var api = require('./APP/api.js')(app);



app.use(express.static(__dirname +'/ui'));
app.listen(1337, function(err){
	if (err) {
		throw err; 
	}
	console.log("App started at Port 1337 ...");
});