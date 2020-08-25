import React, { useState } from 'react';

export const UserInfoContext = React.createContext({});

const Store = ({ children }) => {
	const [data, setData] = useState({ username: '', loggedIn: false });
	//const [loggedIn, setLoggedIn] = useState(false);
	return (
		<UserInfoContext.Provider value={[data, setData]}>
			{children}
		</UserInfoContext.Provider>
	);
};

export default Store;
