import React, { useContext, useState } from 'react';
import { UserInfoContext } from '../Store';
import Login from './Login';
import Heading from './Heading';

function App() {
	const [userInfo] = useContext(UserInfoContext);
	//const [user, setUser] = useState('');

	const checkUser = () => {
		console.log('Global state - From App.jsx');
		console.log(userInfo);
	};
	return (
		<div>
			<Heading></Heading>
			<Login logUser={checkUser}></Login>
		</div>
	);
}

export default App;
