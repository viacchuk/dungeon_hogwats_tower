import React from 'react';

const Header = ({roomtype, coordinate}) => {
	const style = {
		textAlign: 'center',
    	fontSize: '30px',
	}

	let text = "";

	text += `[${coordinate.x}:${coordinate.y}`
	
	if (roomtype.zone === "dedal") text += " Зал Дедала] ";

	if (roomtype.type === "passage") text += "Коридор"
	if (roomtype.type === "room") text += "Комната"

	return (
		<div style = {style} className = 'Header'>
			{text}
		</div>
	)
}

export default Header;