import React, { useState, useRef } from 'react';
import Card from './Card';
import Loading from './Loading';
import { useEffect } from 'react';

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

	async function getData() {
		const res = await fetch('/message');
		const data = await res.json();
		const list = data.reverse();
		setContent(list);
		setLoading(false);
		console.log(list);
	}

	useInterval(() => {
		console.log('Refresh count: ' + count);
		setCount(count + 1);
		getData();
	}, 3000);

	//console.log(content);

	return (
		<div>{loading || !content ? <Loading /> : content.map(createCard)}</div>
	);
}
export default Flow;
