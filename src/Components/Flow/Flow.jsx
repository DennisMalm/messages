import React, { useState, useRef, useContext } from 'react';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { useEffect } from 'react';
import { getMessages } from '../../exchange';
import { UserInfoContext } from '../../Store';
import { update } from '../../exchange';

function useInterval(callback, delay) {
	const savedCallback = useRef();

	// Remember the latest callback.
	useEffect(() => {
		savedCallback.current = callback;
	}, [callback]);

	// Set up the interval.
	useEffect(() => {
		function tick() {
			savedCallback.current();
		}
		if (delay !== null) {
			let id = setInterval(tick, delay);
			return () => clearInterval(id);
		}
	}, [delay]);
}

const Flow = () => {
	const [data] = useContext(UserInfoContext);
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState([]);
	const [count, setCount] = useState(0);

	const updateFlow = async () => {
		await getMessages((messages) => {
			messages.reverse();
			setContent(messages);
		});
		setLoading(!content ? true : false);
	};
	const someupdate = (messageUpdate) => {
		console.log('TEST UPDATE!');
		console.log(messageUpdate);
		update(messageUpdate);
	};
	const createCard = (message) => {
		return (
			<Card
				key={message._id}
				id={message._id}
				author={message.name}
				content={message.content}
				like={message.likes}
				created={message.created}
				likedBy={message.likedBy}
				loggedIn={data.username}
				refresh={updateFlow}
				updateFromFlow={someupdate}
			/>
		);
	};

	useInterval(() => {
		console.log('Refresh count: ' + count);
		setCount(count + 1);
		updateFlow();
	}, 6500);

	return (
		<div>{!content || loading ? <Loading /> : content.map(createCard)}</div>
	);
};
export default Flow;
