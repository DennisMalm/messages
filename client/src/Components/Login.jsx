import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../Store';
import '../Styles/Login.css';
function Login(prop) {
	// Global
	const [, setUserInfo] = useContext(UserInfoContext);
	// Local
	const [localInfo, setLocalInfo] = useState({ username: '', password: '' });
	const [another, setAnother] = useState(false);
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
		prop.logUser();
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
						Login
					</button>
				</form>
				<div id='formFooter'>
					<a className='underlineHover' href='#top'>
						Don't have an account?
					</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
