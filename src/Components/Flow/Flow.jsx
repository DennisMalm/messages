import React, { useState, useRef } from 'react';
import Card from '../Card/Card';
import Loading from '../Loading/Loading';
import { useEffect } from 'react';
import { getMessages, getData } from '../../exchange';

function createCard(message) {
	return (
		<Card
			key={message._id}
			id={message._id}
			author={message.name}
			content={message.content}
			like={message.likes}
		/>
	);
}

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

function Flow() {
	const [loading, setLoading] = useState(true);
	const [content, setContent] = useState([]);
	const [count, setCount] = useState(0);

	const updateFlow = async () => {
		await getMessages((messages) => {
			setContent(messages);
		});
		setLoading(!content ? true : false);
	};
	useInterval(() => {
		console.log('Refresh count: ' + count);
		setCount(count + 1);
		updateFlow();
	}, 3000);

	return (
		<div>{!content || loading ? <Loading /> : content.map(createCard)}</div>
	);
}
export default Flow;
