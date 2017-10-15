const path = require('path');
const https = require('https');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const mongojs = require('mongojs');
// const db = mongojs('harmonixDB', ['harmonixDB']);
const mongoose = require('mongoose');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const directoryToServe = 'client';
const port = 3443;

var mongoClientDB;

var Schema = mongoose.Schema;

app.use(express.static(path.join(__dirname, '')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// MongoClient.connect('mongodb://bernardcooley:3cqEma7omUF303mh@harmonixdj-cluster01-shard-00-00-itmpr.mongodb.net:27017,harmonixdj-cluster01-shard-00-01-itmpr.mongodb.net:27017,harmonixdj-cluster01-shard-00-02-itmpr.mongodb.net:27017/test?ssl=true&replicaSet=harmonixDJ-cluster01-shard-0&authSource=admin', function (err, db) {
//     if (err) {
//         throw err;
//     } else {
//         console.log("successfully connected to the database");
//     }
// });

// const httpsOptions = {
// 	cert: fs.readFileSync(path.join(__dirname, 'ssl', 'server.crt')),
// 	key: fs.readFileSync(path.join(__dirname, 'ssl', 'server.key'))
// }

// var uri = 'mongodb://bernardcooley:3cqEma7omUF303mh@harmonixdj-cluster01-shard-00-00-itmpr.mongodb.net:27017,harmonixdj-cluster01-shard-00-01-itmpr.mongodb.net:27017,harmonixdj-cluster01-shard-00-02-itmpr.mongodb.net:27017/test?ssl=true&replicaSet=harmonixDJ-cluster01-shard-0&authSource=admin';

// MongoClient.connect(uri, function(err, db) {
// 	mongoClientDB = db;
// });

// mongoose.connect('mongodb://bernardcooley:3cqEma7omUF303mh@harmonixdj-cluster01-shard-00-00-itmpr.mongodb.net:27017,harmonixdj-cluster01-shard-00-01-itmpr.mongodb.net:27017,harmonixdj-cluster01-shard-00-02-itmpr.mongodb.net:27017/test?ssl=true&replicaSet=harmonixDJ-cluster01-shard-0&authSource=admin');

// var usersSchema = new Schema({
// 	name: String,
// 	email: String,
// 	username: String,
// 	password: String
// });

// mongoose.model('users', usersSchema);




// app.get('/users1', function(req, res) {
// 	mongoClientDB.collection('users').find(function (err, users) {
// 		console.log(users);
// 		res.send(users);
// 	});
// });

// app.get('/users1', function(req, res) {
// 	mongoose.model('users').find(function(err, users) {
// 		console.log('users1 called');
// 		console.log(users);
// 		res.json(users);
// 	});
// });


// app.get('/tracks', function (req, res) {
// 	// console.log("I recieved a get request");
// 	db.tracks.find(function (err, docs) {
// 		// console.log(docs);
// 		res.json(docs);
// 	});
// });

// app.get('/setlist', function (req, res) {
// 	console.log("I recieved a get request");
// 	db.setlist.find(function (err, docs) {
// 		console.log(docs);
// 		res.json(docs);
// 	});
// });

// app.post('/tracks', function(req, res) {
// 	console.log(req.body);
// 	db.tracks.insert(req.body, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.post('/setlist', function(req, res) {
// 	console.log(req.body);
// 	db.setlist.insert(req.body, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.delete('/tracks/:id', function (req, res) {
// 	var id = req.params.id;
// 	console.log(id);
// 	db.tracks.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.delete('/setlist/:id', function (req, res, err) {
// 	var id = req.params.id;
// 	console.log(id);
// 	db.setlist.remove({_id: mongojs.ObjectId(id)}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.get('/tracks/:id', function(req, res) {
// 	var id = req.params.id;
// 	console.log(id);
// 	db.tracks.findOne({_id: mongojs.ObjectId(id)}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.get('/users/email/:email', function(req, res) {
// 	var email = req.params.email;
// 	console.log("Existing email validation: " + email);
// 	db.users.findOne({email: email}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.get('/users/fname/:fname', function(req, res) {
// 	var fname = req.params.fname;
// 	console.log("Existing fname validation: " + fname);
// 	db.users.findOne({fname: fname}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.get('/users/username/:username', function(req, res) {
// 	var username = req.params.username;
// 	console.log("User: " + username);
// 	db.users.findOne({username: username}, function(err, doc) {
// 		res.json(doc);
// 	});
// });

// app.post('/newCollection', function(req, res) {
// 	console.log("New collection body " + req);
// 	db.createCollection("Cooley", function(err, collection){
// 	   if (err) throw err;
// 	   	console.log("Cooley" + " created");
// 	 	console.log(collection);
// 	});
// });

// app.put('/tracks/:id', function(req, res) {
// 	var id = req.params.id;
// 	var update = {Artist: req.body.Artist, Title: req.body.Title, Key: req.body.Key};
// 	console.log(req.body);
// 	db.tracks.findAndModify({query: {_id: mongojs.ObjectId(id)},
// 		update: {$set: update},
// 		new: true}, function(err, doc) {
// 			res.json(doc);
// 	});
// });

app.get('/', function(req, res){
    res.sendFile(path.resolve(__dirname + '/../index.html'));
});


console.log('Server running: http://localhost:8080')
app.listen(8080);
