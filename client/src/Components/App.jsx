import React, { useContext } from 'react';
import { UserInfoContext } from '../Store';
import Login from './Login';
import Heading from './Heading';
import View from './View';

function App() {
	const [data] = useContext(UserInfoContext);
	//const [loggedIn] = useContext(UserInfoContext);
	//const [user, setUser] = useState('');

	const checkData = (userInfo) => {
		console.log('Global state - From App.jsx');
		console.log(userInfo);
	};
	return (
		<div>
			<Heading></Heading>

			<Login></Login>
		</div>
	);
}

export default App;
