import React, { useState, useContext } from 'react';
import { update } from '../../exchange';
import { useEffect } from 'react';
import { UserInfoContext } from '../../Store';

function Card(props) {
	const [like, setLike] = useState(props.like);
	const [likedBy, setLikedBy] = useState(null);
	const [data] = useContext(UserInfoContext);

	const increase = async () => {
		if (props.author === data.username) {
			console.log(`Can´t like your own message ${data.username}.`);
		} else if (props.likedBy.includes(data.username)) {
			console.log('You have already liked this message. Removing like.');
			//setLike((prev) => prev - 1);
			setLikedBy(null);
			sendUpdate(true);
			//props.refresh();
		} else {
			console.log(`Sending your like to ${props.author}.`);
			//setLike((prev) => prev + 1);
			setLikedBy(data.username);
			sendUpdate(false);
			//props.refresh();
		}
	};
	/* useEffect(() => {

	}, like); */
	const sendUpdate = (remove) => {
		const messageUpdate = {
			likes: remove ? props.like - 1 : props.like + 1,
			id: props.id,
			likedBy: data.username,
			remove: remove,
		};
		setLike(remove ? props.like - 1 : props.like + 1);
		props.updateFromFlow(messageUpdate);
		//console.log('Data to send');
		//update(messageUpdate);
	};
	/* const showUserAndAuthor = () => {
		console.log(props.author);
		console.log(data.username);
	}; */

	useEffect(() => {}, likedBy);
	return (
		<div className='container d-flex flex-column col-sm-6 col-md-4 mt-4 twittRoom'>
			<h1>{props.author}</h1>
			<h4>{props.content}</h4>
			<p>{props.created}</p>
			<div className='container-fluid justify-content-between d-flex flex-row-reverse p-0'>
				<button
					onClick={increase}
					className={`btn ${
						props.author === data.username ||
						props.likedBy.includes(data.username || likedBy === data.username)
							? 'btn-primary'
							: 'btn-secondary'
					}`}
				>
					Like
				</button>
				<h4>{like}</h4>
			</div>
		</div>
	);
}
export default Card;
