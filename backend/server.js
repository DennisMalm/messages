//--------------Imports-----------
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const passportLocal = require('passport-local').Strategy;
const cookieParser = require('cookie-parser');
const bcrypt = require('bcryptjs');
const session = require('express-session');
const bodyParser = require('body-parser');
require('dotenv').config()
const User = require('./user');
//--------------End of Imports-----------

const app = express();

mongoose.connect(
	process.env.MONGO,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	() => {
		console.log('Mongoose is connected.');
	}
);

//------------Middleware------------------
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
	cors({
		origin: 'http://localhost:3000', // <--- React app location
		credentials: true,
	})
);

app.use(
	session({
		secret: 'secretcode',
		resave: true,
		saveUninitialized: true,
	})
);

app.use(cookieParser('secretcode'));

app.use(passport.initialize());
app.use(passport.session());
require('./passportConfig')(passport)

//----------End of Middleware-----------

//------------- Routes ------------
app.post('/login', (req, res, next) => {
	console.log(req.body);
	passport.authenticate('local', (err, user, info) => {
		if(err) throw err
		if(!user) res.send('No user exists.')
		else {
			req.logIn(user, err => {
				if(err) throw err
				res.send('Successfully authenticated User')
			})
		}
	})(req, res, next);
});
app.post('/register', (req, res) => {
	console.log(req.body);
	User.findOne({username: req.body.username}, async (err, doc) => {
		if(err) res.send('Error in register request')
		if(doc) res.send('User already exists.');
		if(!doc) {
			const hashedPassword = await bcrypt.hash(req.body.password, 10)

			const newUser = new User({
				username: req.body.username,
				password: hashedPassword
			});
			await newUser.save();
			res.send('User created.')
		}
	});
});
app.get('/user', (req, res) => {
	console.log(req.user);
	res.send(req.user); // Stores entire user object that has been authenticated
});
//--------End of Routes-----------

//--------Start server------------
app.listen(5000, () => {
	console.log('Server listening on port 5000');
});