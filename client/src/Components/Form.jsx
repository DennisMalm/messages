import React, { useState } from 'react';
import sendData from '../exchange';

function Form(props) {
	const initialFormData = Object.freeze({
		name: props.username,
		content: '',
	});
	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData.name + ' ' + formData.content);
		console.log(JSON.stringify(formData));
		sendData(formData);
	};
	return (
		<div className='container col-md-8 col-lg-6 col-xl-4'>
			<div className='d-flex justify-content-between'>
				<h1>{props.username}</h1>

				<button className='btn btn-dark' onClick={props.logout}>
					Logout
				</button>
			</div>
			<form className=''>
				<div>
					<label htmlFor='message'></label>
					<textarea
						onChange={handleChange}
						className='form-control'
						id='twitt'
						name='content'
						rows='6'
						placeholder='Write your message ...'
					></textarea>
					<div className='d-flex justify-content-end'>
						<button
							onClick={handleSubmit}
							id='sendTwitt'
							type='submit'
							className='btn btn-dark mt-2'
						>
							Click to send!
						</button>
					</div>
				</div>
			</form>
		</div>
	);
}
export default Form;
