import matrix from './map.json';

const getPosition = (coordinate) => {

    const navigation = {
        up: false,
        down: false,
        right: false,
        left: false
    }

    if (matrix[coordinate.y-1][coordinate.x]) navigation.up = true;
    if (matrix[coordinate.y+1][coordinate.x]) navigation.down = true;
    if (matrix[coordinate.y][coordinate.x-1]) navigation.left = true;
    if (matrix[coordinate.y][coordinate.x+1]) navigation.right = true;

    return navigation;
}

export default getPosition;