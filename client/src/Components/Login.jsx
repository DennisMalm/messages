import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../Store';
import '../Styles/Login.css';
import { login, register, getUser } from '../connection';

function Login(props) {
	// Global
	const [userInfo, setUserInfo] = useContext(UserInfoContext);
	// Local
	const [localInfo, setLocalInfo] = useState({ username: '', password: '' });
	const [loggingIn, setLoggingIn] = useState(true);

	const handleChange = (event) => {
		const { name, value } = event.target;

		setLocalInfo((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log('Local state from Login/Register.jsx');
		console.log(localInfo);
		setUserInfo(localInfo);
		props.logUser();
		if (loggingIn) {
			console.log('Login function');
			login(localInfo);
		} else {
			console.log('register function');
			register(localInfo);
		}
	};

	async function getStuff() {
		const user = await getUser();
		console.log('From login:');
		console.log(user);
		setUserInfo(user);
	}
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
						{loggingIn ? 'Login' : 'Register'}
					</button>
				</form>
				<div id='formFooter'>
					<a
						onClick={() => {
							loggingIn ? setLoggingIn(false) : setLoggingIn(true);
							console.log(loggingIn);
						}}
						className='underlineHover'
						href='#top'
					>
						{!loggingIn ? 'Don´t have an account?' : 'Already have an account?'}
					</a>
				</div>
			</div>
			<button onClick={getStuff} type='submit' className='fadeIn fourth btn-1'>
				Testa user
			</button>
			<div>hej</div>
		</div>
	);
}

export default Login;
