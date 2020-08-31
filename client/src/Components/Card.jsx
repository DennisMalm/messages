import React, { useState, useContext } from 'react';
import { update } from '../exchange';
import { useEffect } from 'react';
import { UserInfoContext } from '../Store';

function Card(props) {
	const [like, setLike] = useState(props.like);
	const [data] = useContext(UserInfoContext);

	/* const validLike = () => {
		if (props.author === data.username) {
			console.log(`${data.username} can't like your own message.`);
			return true;
		} else if (!props.likedBy.includes(data.username)) {
			console.log(`${data.username} has liked a message.`);
			return false;
		}
	}; */
	/* function increase() {
		if (validLike) {
			setLike((prevLike) => prevLike + 1);
		}
	}
	function decrease() {
		if (validLike) {
			setLike((prevLike) => prevLike - 1);
		}
	}
	useEffect(() => {
		console.log(props.likedBy);
		const messageData = { likes: like, id: props.id, likedBy: data.username };
		console.log('Data to send');
		update(messageData);
	}, [like, props.id, data.username, props.author]); */

	/* function sendUpdate() {
		const messageData = { likes: like, id: props.id };
		console.log('Data to send');
		update(messageData);
	}  */

	/* <button onClick={increase} className='btn btn-secondary'>
					Like
				</button>
				<h4>{like}</h4>
				<button onClick={decrease} className='btn btn-secondary'>
					Dislike
				</button> */

	return (
		<div className='container d-flex flex-column col-sm-6 col-md-4 mt-4 twittRoom'>
			<h1>{props.author}</h1>
			<h4>{props.content}</h4>
			<div className='container-fluid justify-content-between d-flex flex-row-reverse p-0'></div>
		</div>
	);
}
export default Card;
