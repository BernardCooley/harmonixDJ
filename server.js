var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var mongojs = require('mongojs');
var db = mongojs('harmonixDB', ['harmonixDB']);

var app = express().use(express.static(
    path.join(__dirname, '')
))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/tracks', function (req, res) {
	// console.log("I recieved a get request");
	db.tracks.find(function (err, docs) {
		// console.log(docs);
		res.json(docs);
	});
});

app.get('/setlist', function (req, res) {
	console.log("I recieved a get request");
	db.setlist.find(function (err, docs) {
		console.log(docs);
		res.json(docs);
	});
});

app.post('/tracks', function(req, res) {
	console.log(req.body);
	db.tracks.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.post('/setlist', function(req, res) {
	console.log(req.body);
	db.setlist.insert(req.body, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/tracks/:id', function (req, res) {
	var id = req.params.id;
	console.log(id);
	db.tracks.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.delete('/setlist/:id', function (req, res, err) {
	var id = req.params.id;
	console.log(id);
	db.setlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/tracks/:id', function(req, res) {
	var id = req.params.id;
	console.log(id);
	db.tracks.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/users/email/:email', function(req, res) {
	var email = req.params.email;
	console.log("Existing email validation: " + email);
	db.users.findOne({email: email}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/users/fname/:fname', function(req, res) {
	var fname = req.params.fname;
	console.log("Existing fname validation: " + fname);
	db.users.findOne({fname: fname}, function(err, doc) {
		res.json(doc);
	});
});

app.get('/users/username/:username', function(req, res) {
	var username = req.params.username;
	console.log("User: " + username);
	db.users.findOne({username: username}, function(err, doc) {
		res.json(doc);
	});
});

app.post('/newCollection', function(req, res) {
	console.log("New collection body " + req);
	db.createCollection("Cooley", function(err, collection){
	   if (err) throw err;
	   	console.log("Cooley" + " created");
	 	console.log(collection);
	});
});

app.put('/tracks/:id', function(req, res) {
	var id = req.params.id;
	var update = {Artist: req.body.Artist, Title: req.body.Title, Key: req.body.Key};
	console.log(req.body);
	db.tracks.findAndModify({query: {_id: mongojs.ObjectId(id)},
		update: {$set: update},
		new: true}, function(err, doc) {
			res.json(doc);
	});
});

app.get('/*', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


console.log('Server running: http://localhost:8080')
app.listen(8080);
