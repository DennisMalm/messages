import React, { useContext } from 'react';
import { UserInfoContext } from '../Store';
function Register(prop) {

	const [userInfo, setUserInfo] = useContext(UserInfoContext);
	const handleChange = (event) => {
		const { name, value } = event.target;

		setUserInfo((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	};
	const handleSubmit = (event) => {
        event.preventDefault();
        prop.logUser();
		
	};

	return (
		<form className='container col-md-10 col-lg-8 col-xl-6'>
			<div className='container justify-content-center justify-content-between d-flex space-evenly'>
				<input
					onChange={handleChange}
					className='form-control col-sm-3'
					value={userInfo.username}
					type='text'
					id='username'
					name='username'
					placeholder='Name'
				></input>

				<input
					onChange={handleChange}
					className='form-control col-sm-3'
					value={userInfo.password}
					type='text'
					id='password'
					name='password'
					placeholder='Password'
				></input>
				<button
					onClick={handleSubmit}
					id='submit'
					type='submit'
					className='btn btn-dark'
				>
					Register
				</button>
			</div>
		</form>
	);
}

export default Register;
