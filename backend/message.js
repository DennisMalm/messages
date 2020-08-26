const mongoose = require('mongoose');

const message = new mongoose.Schema({
	name: String,
	content: String,
	created: Date,
	likes: Number,
	created: { type: Date, default: Date() },
});

module.exports = mongoose.model('Message', message);
