import React from 'react';

function loadingGif() {
	return (
		<div className='container d-flex justify-content-center'>
			<img
				src={require('../resources/loading.gif')}
				alt='Laddar saker...'
			></img>
		</div>
	);
}
export default loadingGif;
