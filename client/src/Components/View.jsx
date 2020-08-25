import React, { useContext } from 'react';
import { UserInfoContext } from '../Store';
import Flow from './Flow';
import Form from './Form';
function View() {
	const [data, setdata] = useContext(UserInfoContext);
	return (
		<div>
			Hej, {data.username}
			<button
				onClick={() => setdata({ username: data.username, loggedIn: false })}
			>
				Logout
			</button>
			<Form name={data.username}></Form>
			<Flow></Flow>
		</div>
	);
}
export default View;
