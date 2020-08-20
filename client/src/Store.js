import React, {useState} from 'react';


export const RegUsernameContext = React.createContext('');
export const RegPasswordContext = React.createContext('');

const Store = ({children}) => {
    const [regUsername, setRegUsername] = useState('');
	const [regPassword, setRegPassword] = useState('');
	/* const [loginUsername, setLoginUsername] = useState('');
	const [loginPassword, setLoginPassword] = useState('');
    const [data, setData] = useState(null); */
    
    return (
        <RegUsernameContext.Provider value={[regUsername, setRegUsername]}>
            <RegPasswordContext.Provider value={[regPassword, setRegPassword]}>
            {children}
            </RegPasswordContext.Provider>
        </RegUsernameContext.Provider>
    )
}

export default Store;