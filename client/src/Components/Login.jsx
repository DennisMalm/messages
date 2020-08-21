import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../Store';
function Login(prop) {
	// Global
	const [, setUserInfo] = useContext(UserInfoContext);
	// Local
	const [localInfo, setLocalInfo] = useState({ username: '', password: '' });
	//const [another, setAnother] = useState(false);
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
				<div className='fadeIn first'>
					<img src='' id='icon' alt='User Icon' />
				</div>
				<form>
					<input
						onChange={handleChange}
						type='text'
						id='login'
						className='fadeIn second'
						name='login'
						value={localInfo.username}
						placeholder='login'
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
					<input
						onClick={handleSubmit}
						type='submit'
						className='fadeIn fourth'
					></input>
				</form>
				<div id='formFooter'>
					<a className='underlineHover' href='#'>
						Don't have an account?
					</a>
				</div>
			</div>
		</div>
	);
}

export default Login;
