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
		<form className='container col-md-8 col-lg-6 col-xl-4'>
			<div>
				<label htmlFor='name'>Name</label>
				<input
					onChange={handleChange}
					className='form-control col-sm-3'
					type='text'
					id='name'
					name='name'
					placeholder='Name'
				></input>
			</div>
			<div>
				<label htmlFor='twitt'>Twitt something</label>
				<textarea
					onChange={handleChange}
					className='form-control'
					id='twitt'
					name='content'
					rows='6'
					placeholder='Twittering here...'
				></textarea>
				<button
					onClick={handleSubmit}
					id='sendTwitt'
					type='submit'
					className='btn btn-dark mt-2'
				>
					Click to send!
				</button>
			</div>
		</form>
	);
}
export default Form;
