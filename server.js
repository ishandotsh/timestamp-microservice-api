const express = require('express');
require('dotenv').config({ path: './config.env' });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/api/timestamp/', (req, res) => {
	res.json({ unix: Date.now(), utc: new Date().toUTCString() });
});

app.get('/api/timestamp/:datestring', (req, res) => {
	let datestring = req.params.datestring;

	if (/\d{5,}/.test(datestring)) {
		dateInt = parseInt(datestring);
		res
			.status(200)
			.json({ unix: dateInt, utc: new Date(dateInt).toUTCString() });
	}

	let newDate = new Date(datestring);

	if (newDate.toString() === 'Invalid Date') {
		res.status(400).json({ error: 'Invaid Date' });
	} else {
		res.json({ unix: newDate.valueOf(), utc: newDate.toUTCString() });
	}
});

app.listen(PORT, console.log(`Service running on port ${PORT}`));
