import axios from 'axios';

export const login = (loginInfo) => {
	axios({
		method: 'POST',
		data: {
			username: loginInfo.username,
			password: loginInfo.password,
		},
		withCredentials: true,
		url: 'http://localhost:5000/login',
	}).then((res) => {
		console.log(res);
	});
};
export const register = (regInfo) => {
	axios({
		method: 'POST',
		data: {
			username: regInfo.username,
			password: regInfo.password,
		},
		withCredentials: true,
		url: 'http://localhost:5000/register',
	}).then((res) => console.log(res));
};
export const getUser = () => {
	axios({
		method: 'GET',
		withCredentials: true,
		url: 'http://localhost:5000/user',
	}).then((res) => {
		console.log('From Connection.js');
		console.log(res.data);
		return res.data.username;
	});
};
