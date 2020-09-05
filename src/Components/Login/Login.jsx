import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../../Store';
import './Login.css';
import axios from 'axios';

function Login() {
	// Global
	const [, setdata] = useContext(UserInfoContext);
	//const [loggedIn, setLoggedIn] = useContext(UserInfoContext);
	// Local
	const [localInfo, setLocalInfo] = useState({
		username: '',
		password: '',
		confirmPassword: '',
	});
	const [isLogin, setIslogin] = useState(true);

	// Connection methods
	const login = () => {
		console.log('Login function called');
		axios({
			method: 'POST',
			data: {
				username: localInfo.username,
				password: localInfo.password,
			},
			withCredentials: true,
			url: 'http://localhost:5000/login',
		}).then((res) => {
			console.log(res);
			console.log(res.data.valid);
			setdata({
				username: localInfo.username,
				loggedIn: res.data.valid,
			});
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
	const resetForm = () => {
		setLocalInfo(
			setLocalInfo({
				username: '',
				password: '',
				confirmPassword: '',
			})
		);
	};

	const switchAuthMode = () => {
		setIslogin(() => {
			return !isLogin;
		});
	};

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
		if (isLogin) {
			login(localInfo);
		} else if (localInfo.password === localInfo.confirmPassword) {
			register(localInfo);
		} else {
			resetForm();
			alert('Password did not match!');
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
						type='password'
						id='password'
						className='fadeIn third'
						name='password'
						value={localInfo.password}
						placeholder='Password'
					></input>
					{!isLogin ? (
						<input
							onChange={handleChange}
							type='password'
							id='confirmPassword'
							className='fadeIn third'
							name='confirmPassword'
							value={localInfo.confirmPassword}
							placeholder='Confirm Password'
						></input>
					) : null}

					<button
						onClick={handleSubmit}
						type='submit'
						className='fadeIn fourth btn-1'
					>
						{isLogin ? 'Login' : 'Register'}
					</button>
				</form>
				<div id='formFooter'>
					<a onClick={switchAuthMode} className='underlineHover' href='#top'>
						{isLogin
							? 'Dont´t have an account yet?'
							: 'Already have an account?'}
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
