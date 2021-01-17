const { admin, db } = require("../util/admin");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

const fromNumber = '+12673092131'
const exampleBody = 'Hello, '
exports.messageUsers = (req, res) => {
	const category = req.body.category;
  	admin.firestore().collection('Users').get()
		.then((data) =>{
			data.forEach((doc)=>{ // we need to get every category
				name = doc.data().Name
				number = doc.data().PhoneNumber;
				client.messages
				  .create({
				     body: 'Hi ' + name + ',\n According to our database, you are in Category ' + category + ' which is current stage of vaccination. Please consult healthcare professionals for the vaccine',
				     from: fromNumber,
				     to: '+' + number.toString()
				   })
				  .catch((err) => console.log("Error with " + name + " account"))
			});
			return res.status(201).json({message:"Everything worked!"})
		})
		.catch((err) => console.error(err));
  };


// client.messages
//   .create({
//      body: 'Test Text Message',
//      from: '+12673092131',
//      to: '+19165015227'
//    })
//   .then(message => console.log(message.sid));

