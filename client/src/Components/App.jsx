import React, { useContext } from 'react';
import { UserInfoContext } from '../Store';
import Landing from './Landing';

function App() {
	const [userInfo] = useContext(UserInfoContext);

	const checkUser = () => {
		console.log('Global state - From App.jsx');
		console.log(userInfo);
	};
	return <Landing logUser={checkUser}></Landing>;
}

export default App;
