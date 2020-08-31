const mongoose = require('mongoose');

const message = new mongoose.Schema({
	name: String,
	content: String,
	created: Date,
	likes: Number,
	created: { type: Date, default: Date() },
	likedBy: Array,
});

module.exports = mongoose.model('Message', message);
