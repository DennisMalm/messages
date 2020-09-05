const mongoose = require('mongoose');

const message = new mongoose.Schema({
	name: String,
	content: String,
	created: Date,
	likes: { type: Number, default: 0 },
	created: { type: Date, default: Date() },
	likedBy: [{ type: String }],
	dislikedBy: [{ type: String }],
});

module.exports = mongoose.model('Message', message);
