export function sendData(formData) {
	fetch('/message', {
		method: 'POST',
		body: JSON.stringify(formData),
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((createdMessage) => {
			console.log('Created: ' + JSON.stringify(createdMessage));
		});
}
export function update(data) {
	console.log(data);
	fetch('/update', {
		method: 'POST',
		body: JSON.stringify(data),
		headers: {
			'content-type': 'application/json',
		},
	})
		.then((response) => response.json())
		.then((createdMessage) => {
			console.log('Updated:' + JSON.stringify(createdMessage));
		});
}
export async function checkUser(userInfo) {
	console.log(userInfo);
	console.log(JSON.stringify(userInfo.name));

	fetch('/user', {
		method: 'POST',
		body: JSON.stringify(userInfo),
		headers: {
			'content-type': 'application/json',
		},
	}).then((response) =>
		response.json().then((valid) => {
			console.log(valid);

			return valid.valid;
		})
	);
}
export default sendData;
