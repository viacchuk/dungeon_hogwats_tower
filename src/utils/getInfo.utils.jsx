const getInfo = (coordinate, goto) => {

    if (coordinate.x === 47 & coordinate.y === 67) {
        return (`...`);
    }
    if (coordinate.x === 27 & coordinate.y === 60) {
        return (
            <div>
                <img src = 'img/map_dedal_1.png' />
            </div>
        );
    }
    if (coordinate.x === 33 & coordinate.y === 59) {
        return (
            <div>
                <img src = 'img/map_dedal_2.png' />
            </div>
        );
    }
    if (coordinate.x === 40 & coordinate.y === 49) {
        return (
            <div>
                <img src = 'img/map_dedal_3.png' />
            </div>
        );
    }
    if (coordinate.x === 30 & coordinate.y === 51) {
        return (
            <div>
                <img src = 'img/map_dedal_4.png' />
            </div>
        );
    }
    if (coordinate.x === 35 & coordinate.y === 61) {
        return (
            <div>
                <img src = 'img/map_dedal_5.png' />
            </div>
        );
    }
    if (coordinate.x === 23 & coordinate.y === 67) {
        return (
            <div>
                <img src = 'img/map_dedal_6.png' />
            </div>
        );
    }
    if (coordinate.x === 35 & coordinate.y === 49) {
        return (1);
    }
    const center = [
        {x:34,y:31}, {x:35,y:31}, {x:36,y:31},
        {x:34,y:32}, {x:35,y:32}, {x:36,y:32},
        {x:34,y:33}, {x:35,y:33}, {x:36,y:33},
    ];
    if (center.some(coord => coord.x === coordinate.x && coord.y === coordinate.y))
        return(`...`);

    return (`Тут ничего нет, надо продвигаться дальше...`);
}

export default getInfo;