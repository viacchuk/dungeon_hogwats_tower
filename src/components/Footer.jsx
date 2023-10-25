import React from 'react';
import getInfo from '../utils/getInfo.utils.jsx';

const Footer = ({coordinate, goto}) => {
	const style = {
		textAlign: 'center',
    	fontSize: '20px',
	}

	let text = getInfo(coordinate);

	if (text === 1) {
		text = (
			<div>
				<img style = {{height: '20px', width: '20px'}} onClick={() => goto(coordinate, 'to')} src = 'img/array_up.png' />
			</div>
		)
	}

	return (
		<div style = {style} className = 'Footer'>
			{text}
		</div>
	)
}

export default Footer;