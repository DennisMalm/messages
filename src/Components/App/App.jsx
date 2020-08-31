import React, { useContext } from 'react';
import { UserInfoContext } from '../../Store';
import Login from '../Login/Login';
import Heading from '../Heading/Heading';
import View from '../View/View';

function App() {
	const [data] = useContext(UserInfoContext);

	return (
		<div>
			<Heading></Heading>
			{data.loggedIn ? <View></View> : <Login></Login>}
		</div>
	);
}

export default App;
