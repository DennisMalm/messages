import React, { useContext } from 'react';
import { UserInfoContext } from '../Store';
import Flow from './Flow';
import Form from './Form';
function View() {
	const [data, setdata] = useContext(UserInfoContext);
	/* function logout() {
		setdata({ username: data.username, loggedIn: false });
	} */
	const logout = () => {
		setdata({ username: data.username, loggedIn: false });
	};
	return (
		<div>
			<Form username={data.username} logout={logout}></Form>
			<Flow></Flow>
		</div>
	);
}

export default View;
