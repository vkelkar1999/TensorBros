const dotenv = require('dotenv');
const result = dotenv.config();
const config = {
	apiKey: process.env.FIREBASE_apiKey,
    authDomain: process.env.FIREBASE_authDomain,
    databaseURL: process.env.FIREBASE_databaseURL,
    projectId: process.env.FIREBASE_projectId,
    storageBucket: process.env.FIREBASE_storageBucket,
    messagingSenderId: process.env.FIREBASE_messagingSenderId,
    appId: process.env.FIREBASE_appId
}

const functions = require('firebase-functions');
const app = require('express')();
const { admin, db } = require('./util/admin');

const firebase = require("firebase");
firebase.initializeApp(config);
//Get all users
app.get('/users', (req, res) => { 
	admin.firestore().collection('Users').get()
		.then((data) =>{
			let users = [];
			data.forEach((doc)=>{
				users.push(doc.data());
			});
			return res.json(users);
		})
		.catch((err) => console.error(err));

})

//Add user
app.post('/users', (req, res) =>{
	const user = {
		 email: req.body.email,
		 phoneNumber: req.body.phoneNumber
	}
	db.collection('Users').add(user)
	.then((doc) => { 
		const newUser = user;
		user.userId = doc.id;
		res.json(user);
	})
	.catch((err) => {
      res.status(500).json({ error: 'something went wrong' });
      console.error(err);
    });

})

exports.api = functions.https.onRequest(app);