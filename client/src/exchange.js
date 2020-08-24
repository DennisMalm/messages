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

export default sendData;
