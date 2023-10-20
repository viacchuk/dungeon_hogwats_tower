import './App.css'
import React, { useState } from 'react';
import Header from './components/Header'
import Body from './components/Body';
import Footer from './components/Footer';
import getPosition from './utils/getPosition.utils';
import getRoomType from './utils/getRoomType.utils';

const App = () => {
	const [coordinate, setCoordinate] = useState({y: 2, x: 2});
	console.log(coordinate);
	const [roomtype, setRoomType] = useState(getRoomType(coordinate));
	const [navigation, setNavigation] = useState(getPosition(coordinate));

	console.log(coordinate);

	const goto = (coor, type) => {
		if (type === "up") coor.y -= 1;
		if (type === "down") coor.y += 1;
		if (type === "left") coor.x -= 1;
		if (type === "right") coor.x += 1;

		setCoordinate(coor);
		setRoomType(getRoomType(coor));
		setNavigation(getPosition(coor));
	}

	return (
		<div className = 'App'>
			<Header roomtype = {roomtype} coordinate = {coordinate}/>
			<Body roomtype = {roomtype} coordinate = {coordinate} navigation = {navigation} goto = {goto}/>
			<Footer coordinate = {coordinate}/>
		</div>
	)
}

export default App;