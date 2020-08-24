import React, { useState } from 'react';

export const UserInfoContext = React.createContext({});

const Store = ({ children }) => {
	const [userInfo, setUserInfo] = useState(null);
	return (
		<UserInfoContext.Provider value={[userInfo, setUserInfo]}>
			{children}
		</UserInfoContext.Provider>
	);
};

export default Store;

/* export const RegUsernameContext = React.createContext('');
export const RegPasswordContext = React.createContext(''); */

/* const [regUsername, setRegUsername] = useState('');
	const [regPassword, setRegPassword] = useState(''); */
/* const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
    const [data, setData] = useState(null); */
