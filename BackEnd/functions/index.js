const functions = require('firebase-functions');
const app = require('express')();
const { admin, db } = require('./util/admin');

// const firebase = require("firebase");
// firebase.initializeApp(config);

const {
	getUsers,
	addUsers
} = require('./handlers/users');

const {
	messageUsers
} = require('./handlers/messages')

//User routes
app.get('/users', getUsers);
app.post('/users', addUsers);

//Message all the users in the respective class
app.post('/messages', messageUsers);

//Age, over 65
exports.api = functions.https.onRequest(app);