const functions = require('firebase-functions');
const app = require('express')();
const { admin, db } = require('./util/admin');
const papa = require('papaparse');
const fs = require('fs');
const cors = require('cors');
app.use(cors());

const dates = {
	"1" : "2021-01-15",
	"2" : "2021-02-01",
	"3" : "2021-03-20",
	"4" : "2021-09-01"
}

const {
	getUsers,
	addUsers
} = require('./handlers/users');

const {
	messageUsers
} = require('./handlers/messages')

var storage = admin.storage().bucket('gs://lucky-outpost-301600.appspot.com');

//User routes
app.get('/users', getUsers);
app.post('/users', addUsers);

//Message all the users in the respective class
app.post('/messages', messageUsers);

app.post('/test', (req, res) =>{
	const file = fs.createReadStream('California Vaccine Predictions (2020 to 2025).csv');
	var date = "";
	var Vaccinated = "";
	papa.parse(file, {
	    worker: true, // Don't bog down the main thread if its a big file
	    step: function(row, parser) {
	    	if (row.data[1] === "2021-01-15"){
	    		date = row.data[1]
	    		Vaccinated = row.data[16]
	    		parser.abort();
	    	}
	    },
	    complete: function(results, file) {
	        return res.json({"date":date, "Vaccinated":Vaccinated});
	    }
	})
})


//Age, over 65
exports.api = functions.https.onRequest(app);