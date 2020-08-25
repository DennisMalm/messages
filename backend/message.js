const mongoose = require('mongoose');

const message = new mongoose.Schema({
	name: String,
	content: String,
	created: Date,
	likes: Number,
});
module.exports = mongoose.model('Message', message);
