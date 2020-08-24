import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../Store';
import '../Styles/Login.css';
import axios from 'axios';

function Login(props) {
	// Global
	const [data, setdata] = useContext(UserInfoContext);
	//const [loggedIn, setLoggedIn] = useContext(UserInfoContext);
	// Local
	const [localInfo, setLocalInfo] = useState({ username: '', password: '' });
	const [reg, setReg] = useState(false);

	// Connection methods
	const login = (loginInfo) => {
		console.log('Login function called');
		axios({
			method: 'POST',
			data: {
				username: loginInfo.username,
				password: loginInfo.password,
			},
			withCredentials: true,
			url: 'http://localhost:5000/login',
		}).then((res) => {
			console.log(res);
			setdata(localInfo.username);
		});
	};
	const register = (regInfo) => {
		console.log('Register function called');
		axios({
			method: 'POST',
			data: {
				username: regInfo.username,
				password: regInfo.password,
			},
			withCredentials: true,
			url: 'http://localhost:5000/register',
		}).then((res) => console.log(res));
	};
	const getUser = () => {
		axios({
			method: 'GET',
			withCredentials: true,
			url: 'http://localhost:5000/user',
		}).then((res) => {
			console.log('From Connection.js');
			console.log(res.data);
			setdata(res.data);
		});
	};
	// Handlers

	const handleChange = (event) => {
		const { name, value } = event.target;

		setLocalInfo((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		console.log('Local state from Login/Register.jsx');
		console.log(localInfo);
		if (!reg) {
			login(localInfo);
		} else {
			register(localInfo);
		}
	};

	return (
		<div className='wrapper fadeInDown'>
			<div id='formContent'>
				<div className='fadeIn first'></div>
				<form>
					<input
						onChange={handleChange}
						type='text'
						id='login'
						className='fadeIn second'
						name='username'
						value={localInfo.username}
						placeholder='Name'
					></input>
					<input
						onChange={handleChange}
						type='text'
						id='password'
						className='fadeIn third'
						name='password'
						value={localInfo.password}
						placeholder='password'
					></input>
					<button
						onClick={handleSubmit}
						type='submit'
						className='fadeIn fourth btn-1'
					>
						{!reg ? 'Login' : 'Register'}
					</button>
				</form>
				<div id='formFooter'>
					<a
						onClick={() => {
							!reg ? setReg(false) : setReg(true);
						}}
						className='underlineHover'
						href='#top'
					>
						{!reg ? 'Don´t have an account?' : 'Already have an account?'}
					</a>
				</div>
			</div>
			<button onClick={getUser} type='submit' className='fadeIn fourth btn-1'>
				Testa user
			</button>
		</div>
	);
}

export default Login;
