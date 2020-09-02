import React, { useState, useContext } from 'react';
import { update } from '../../exchange';
import { useEffect } from 'react';
import { UserInfoContext } from '../../Store';

function Card(props) {
	const [like, setLike] = useState(props.like);
	const [data] = useContext(UserInfoContext);

	// Testa att lägga in logik för att ta bort eller lägga till like i backend
	const increase = async () => {
		if (props.author === data.username) {
			console.log(`Can´t like your own message ${data.username}.`);
		} else if (props.likedBy.includes(data.username)) {
			console.log('You have already liked this message. Removing like.');
			setLike((prev) => prev - 1);
			sendUpdate(true);
			props.refresh();
		} else {
			console.log(`Sending your like to ${props.author}.`);
			setLike((prev) => prev + 1);
			sendUpdate(false);
			props.refresh();
		}
	};

	const sendUpdate = (remove) => {
		const messageUpdate = {
			likes: like,
			id: props.id,
			likedBy: data.username,
			remove: remove,
		};
		props.updateFromFlow(messageUpdate);
		//console.log('Data to send');
		//update(messageUpdate);
	};

	/* useEffect(() => {
		function sendUpdate() {
			const messageUpdate = {
				likes: like,
				id: props.id,
				likedBy: data.username,
			};
			console.log('Data to send');
			update(messageUpdate);
		}
		sendUpdate();
	}, [like, props.id, data.username]); */

	/* const showUserAndAuthor = () => {
		console.log(props.author);
		console.log(data.username);
	}; */

	return (
		<div className='container d-flex flex-column col-sm-6 col-md-4 mt-4 twittRoom'>
			<h1>{props.author}</h1>
			<h4>{props.content}</h4>
			<p>{props.created}</p>
			<button
				onClick={increase}
				className={`btn ${
					props.author === data.username ? 'btn-primary' : 'btn-secondary'
				}`}
			>
				Like
			</button>
			<h4>{like}</h4>
			<div className='container-fluid justify-content-between d-flex flex-row-reverse p-0'></div>
		</div>
	);
}
export default Card;
