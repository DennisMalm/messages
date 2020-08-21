import React, {useState, useContext} from 'react';
import { UserInfoContext } from '../Store';
import Register from './Register';
import Login from './Login'
import Heading from './Heading'



function Landing() {

    const [userInfo,] = useContext(UserInfoContext);
    const [login, setLogin] = useState(false);
	
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
				{ !login ? <Login logUser={checkUser} regUser={setLogin}></Login> : <Register logUser={checkUser} regUser={setLogin}></Register>}
			</div>
		</div>
	);
}

export default Landing;
