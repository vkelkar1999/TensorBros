const functions = require('firebase-functions');
const app = require('express')();
const { admin, db } = require('./util/admin');


const cors = require('cors');
app.use(cors());


const {
	// getStorage,
	getUsers,
	addUsers
} = require('./handlers/users');

const {
	messageUsers
} = require('./handlers/messages')

var storage = admin.storage()
//User routes
app.get('/users', getUsers);
app.post('/users', addUsers);

//Message all the users in the respective class
app.post('/messages', messageUsers);

app.post('/test', (req, res) =>{
	var fileReference = storage.ref().ref('gs://lucky-outpost-301600.appspot.com/California Vaccine Predictions (2020 to 2025).csv');
	console.log(storage)
	return res.json({"message":"sucess"})
	//var fileReference = storage.refFromURL('gs://lucky-outpost-301600.appspot.com/California Vaccine Predictions (2020 to 2025).csv');
	// fileReference.getDownloadURL().then(function(url) {
	// 	  var xhr = new XMLHttpRequest();
	// 	  xhr.responseType = 'blob';
	// 	  xhr.onload = function(event) {
	// 	    var blob = xhr.response;
	// 	  };
	// 	  xhr.open('GET', url);
	// 	  xhr.send();

	// 	  // Or inserted into an <img> element:
	// 	  var img = document.getElementById('myimg');
	// 	  img.src = url;
	// 	}).catch(function(error) {
	// 	  // Handle any errors
	// 	});
})


//Age, over 65
exports.api = functions.https.onRequest(app);