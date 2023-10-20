import React from 'react';
import getInfo from '../utils/getInfo.utils';

const Footer = ({coordinate}) => {
	const style = {
		textAlign: 'center',
    	fontSize: '20px',
	}

	const text = getInfo(coordinate);

	return (
		<div style = {style} className = 'Footer'>
			{text}
		</div>
	)
}

export default Footer;