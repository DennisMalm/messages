import React, { useContext, useState } from 'react';
import { UserInfoContext } from '../Store';
import Login from './Login';
import Heading from './Heading';

function Landing() {
	const [userInfo] = useContext(UserInfoContext);
	//const [login, setLogin] = useState(false);

	const checkUser = () => {
		console.log('Global state - From App.jsx');
		console.log(userInfo);
	};
	return (
		<div>
			<div>
				<Heading></Heading>
			</div>
			<div>
				<Login
					
				></Login>
			</div>
		</div>
	);
}

export default Landing;
