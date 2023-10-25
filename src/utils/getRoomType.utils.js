const getRoomType = (coordinate) => {

    const rooms = [
        {x:47,y:67},
        {x:27,y:60},
        {x:33,y:59},
        {x:40,y:49},
        {x:30,y:51},
        {x:35,y:61},
        {x:23,y:67},
        {x:35,y:49},
    ];
    const center = [
        {x:34,y:31}, {x:35,y:31}, {x:36,y:31},
        {x:34,y:32}, {x:35,y:32}, {x:36,y:32},
        {x:34,y:33}, {x:35,y:33}, {x:36,y:33},
    ];

    if (center.some(coord => coord.x === coordinate.x && coord.y === coordinate.y))
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