import React, { useContext } from 'react';
import { UserInfoContext } from '../Store';
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
		</div>
	);
}
export default View;
