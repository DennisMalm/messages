import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../Store';
import '../Styles/Login.css';
function Login(props) {
	// Global
	const [, setUserInfo] = useContext(UserInfoContext);
	// Local
	const [localInfo, setLocalInfo] = useState({ username: '', password: '' });
	const [loggedIn, setLoggedIn] = useState(false);
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
		console.log('Local state from Register.jsx');
		console.log(localInfo);
		setUserInfo(localInfo);
		props.logUser();
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
						{loggedIn ? 'Login' : 'Register'}
					</button>
				</form>
				<div id='formFooter'>
					<a
						onClick={() => {
							loggedIn ? setLoggedIn(false) : setLoggedIn(true);
						}}
						className='underlineHover'
						href='#top'
					>
						{loggedIn ? 'Don´t have an account?' : 'Already have an account?'}
					</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
