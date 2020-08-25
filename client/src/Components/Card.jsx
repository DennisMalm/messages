import React, { useState } from 'react';
import { update } from '../exchange';
import { useEffect } from 'react';
function Card(props) {
	const [like, setLike] = useState(props.like);

	function increase() {
		setLike((prevLike) => prevLike + 1);
	}
	function decrease() {
		setLike((prevLike) => prevLike - 1);
	}
	useEffect(() => {
		const data = { likes: like, id: props.id };
		console.log('Data to send');
		update(data);
	}, [like, props.id]);

	/* function sendUpdate() {
		const data = { likes: like, id: props.id };
		console.log('Data to send');
		update(data);
	} */

	return (
		<div className='container d-flex flex-column col-sm-6 col-md-4 mt-4 twittRoom'>
			<h1>{props.name}</h1>
			<p>{props.content}</p>
			<div className='container-fluid justify-content-between d-flex flex-row-reverse'>
				<button onClick={increase} className='btn btn-secondary'>
					Like
				</button>
				<h4>{like}</h4>
				<button onClick={decrease} className='btn btn-secondary'>
					Dislike
				</button>
			</div>
			<p></p>
		</div>
	);
}
export default Card;
