const getInfo = (coordinate) => {

    if (coordinate.x === 47 & coordinate.y === 67) {
        return (`...`);
    }

    return (`Тут ничего нет, надо продвигаться дальше...`);
}

export default getInfo;