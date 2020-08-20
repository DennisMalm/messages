import React, {useState} from 'react';

const Store = ({children}) => {
    const [regUsername, setRegUsername] = useState('');
	const [regPassword, setRegPassword] = useState('');
	/* const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
    const [data, setData] = useState(null); */
    
    return (
        <regUsernameContext.Provider value={[regUsername, setRegUsername]}>
            <regPasswordContext.Provider value={[regPassword, setRegPassword]}>
            {children}
            </regPasswordContext.Provider>
        </regUsernameContext.Provider>
    )
}

export default Store;