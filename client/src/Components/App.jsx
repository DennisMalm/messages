import React, {useContext} from 'react';
import { UserInfoContext } from '../Store';
import Register from './Register';



function App() {

	const [userInfo,] = useContext(UserInfoContext);
	
	const checkUser = () => {
		console.log('From App.jsx');
		console.log(userInfo);
	};
	return (
		<div>
			<div>
				<h1>Hai</h1>
			</div>
			<div>
				<Register logUser={checkUser}></Register>
			</div>
		</div>
	);
}

export default App;
