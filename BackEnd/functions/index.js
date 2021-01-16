const functions = require('firebase-functions');
const app = require('express')();
const { admin, db } = require('./util/admin');

// const firebase = require("firebase");
// firebase.initializeApp(config);

const {
	getUsers,
	addUsers
} = require('./handlers/users');

//User routes
app.get('/users', getUsers);
app.post('/users', addUsers);

exports.api = functions.https.onRequest(app);