const { admin, db } = require("../util/admin");

const config = require('../util/config')
const firebase = require("firebase");
firebase.initializeApp(config);

// const storage = firebase.storage();
// exports.getStorage = () =>{
// 	return storage;
// }
exports.getUsers = (req, res) => { 
	admin.firestore().collection('Users').get()
		.then((data) =>{
			let users = [];
			data.forEach((doc)=>{
				users.push(doc.data());
			});
			return res.json(users);
		})
		.catch((err) => console.error(err));
};

exports.addUsers = (req, res) =>{
	const user = {
		 Email: req.body.email,
		 PhoneNumber: req.body.phoneNumber
	}
	db.collection('Users').add(user)
	.then((doc) => { 
		const newUser = user;
		user.userId = doc.id;
		return res.json(user);
	})
	.catch((err) => {
      res.status(500).json({ error: 'something went wrong' });
      console.error(err);
  	});
};