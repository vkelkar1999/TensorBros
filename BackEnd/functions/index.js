const functions = require('firebase-functions');
const app = require('express')();
const { admin, db } = require('./util/admin');


const cors = require('cors');
app.use(cors());


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

app.post('/test', (req, res) =>{
	const number = req.body.phoneNumber;
	console.log(text);
	return res.json(text + " read succesfully");
})


//Age, over 65
exports.api = functions.https.onRequest(app);