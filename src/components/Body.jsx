import React from 'react';

const Body = ({roomtype, coordinate, navigation, goto}) => {
	const style = {
		position: 'relative',
	}

	const arraysStyle = {
		position: 'absolute',
		top: '50%',
		left: '50%',
		transform: 'translate(-50%, -50%)',
		width: '35%',
		height: '70%',
	}

	const tableStyle = {
		width: '100%',
		height: '100%',
		borderCollapse: 'collapse',
	}

	const tdStyle = {
		width: '33.33%', 
		height: '33.33%', 
	}

	let imgURL = '';
	if (roomtype.type === "center") imgURL = 'img/center.png'
	if (roomtype.type === "room") imgURL = 'img/room.png'
	if (roomtype.type === "passage") imgURL = 'img/passage.png'

	return (
		<div style = {style} className = 'Body'>
            <img style = {{width: '100%'}} src = {imgURL} />
			<div style = {arraysStyle}>
				<table style = {tableStyle}>
					<tbody>
						<tr>
						<td style={tdStyle}></td>
						<td style={tdStyle}>
							{navigation.up ? (<img style = {{width: '100%'}} onClick={() => goto(coordinate, 'up')} src = 'img/array_up.png' />) : null}
						</td>
						<td style={tdStyle}></td>
						</tr>
						<tr>
						<td style={tdStyle}>
							{navigation.left ? (<img style = {{width: '100%'}} onClick={() => goto(coordinate, 'left')} src = 'img/array_left.png' />) : null}
						</td>
						<td style={tdStyle}></td>
						<td style={tdStyle}>
							{navigation.right ? (<img style = {{width: '100%'}} onClick={() => goto(coordinate, 'right')} src = 'img/array_right.png' />) : null}
						</td>
						</tr>
						<tr>
						<td style={tdStyle}></td>
						<td style={tdStyle}>
							{navigation.down ? (<img style = {{width: '100%'}} onClick={() => goto(coordinate, 'down')} src = 'img/array_down.png' />) : null}
						</td>
						<td style={tdStyle}></td>
						</tr>
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default Body;