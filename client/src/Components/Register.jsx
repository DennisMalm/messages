import React, { useState, useContext } from 'react';
import { UserInfoContext } from '../Store';
import '../Styles/Register.css'
function Register(prop) {
	// Global
	const [, setUserInfo] = useContext(UserInfoContext);
	// Local
	const [localInfo, setLocalInfo] = useState({ username: '', password: '' });
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
		{/* <form className='container col-md-10 col-lg-8 col-xl-6'>
			<div className='container justify-content-center justify-content-between d-flex space-evenly'>
				<input
					onChange={handleChange}
					className='form-control col-sm-3'
					value={localInfo.username}
					type='text'
					id='username'
					name='username'
					placeholder='Name'
				></input>
				<input
					onChange={handleChange}
					className='form-control col-sm-3'
					value={localInfo.password}
					type='text'
					id='password'
					name='password'
					placeholder='Password'
				></input>
			</div>
			<div className='d-flex  justify-content-around'>
				<button
					onClick={handleSubmit}
					id='submit'
					type='submit'
					className='btn btn-dark'
				>
					Register
				</button>
				<button
					onClick={(e) => {
						e.preventDefault();
						prop.logUser();
					}}
					id='submit'
					type='submit'
					className='btn btn-dark'
				>
					show user
				</button>
			</div>
			<div className='d-flex justify-content-center'>
				<button
					onClick={(e) => {
						e.preventDefault();
						prop.regUser(false);
					}}
					id='submit'
					type='submit'
					className='btn btn-dark'
				>
					Have an account?
				</button>
			</div>
		</form> */}
	);
}

export default Register;
