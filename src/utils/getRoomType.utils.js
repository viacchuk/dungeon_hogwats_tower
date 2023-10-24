const getRoomType = (coordinate) => {

    const rooms = [{x:47,y:67}];

    if (coordinate == {x:35,y:32})
        return ({
            zone: "dedal",
            type: "center",
        })

    if(rooms.some(coord => coord.x === coordinate.x && coord.y === coordinate.y))
        return ({
            zone: "dedal",
            type: "room",
        })

    return ({
            zone: "dedal",
            type: "passage",
        })
}

export default getRoomType;