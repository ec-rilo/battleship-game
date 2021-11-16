import Ship from '../Ship/ship-logic';

const Gameboard = () => {
  const board = [];

  for (let i = 0; i < 11; ++i) {
    board.push([]);
    for (let j = 0; j < 11; ++j) {
      board[i][j] = { populated: false, hit: false, ship: undefined };
    }
  }

  const shipsArr = [];

  const placeShip = (shipCoords) => {
    let available = false;
    for (let i = 0; i < shipCoords.length; ++i) {
      if (board[shipCoords[i].x][shipCoords[i].y].populated === false) {
        available = true;
      }
    }

    if (available === true) {
      shipsArr.push(Ship(shipCoords));
      for (let i = 0; i < shipCoords.length; ++i) {
        board[shipCoords[i].x][shipCoords[i].y].populated = true;
        board[shipCoords[i].x][shipCoords[i].y].ship = shipsArr.length - 1;
      }
    }
  };

  const receiveAttack = (attackCoords) => {
    if (
      board[attackCoords.x][attackCoords.y].populated === true &&
      board[attackCoords.x][attackCoords.y].hit === false
    ) {
      board[attackCoords.x][attackCoords.y].hit = true;
      shipsArr[board[attackCoords.x][attackCoords.y].ship].hit(attackCoords);
    }
  };

  const isSunk = (ship) => ship.isSunk() === true;

  const allSunk = () => {
    if (shipsArr.every(isSunk) === true) return true;
    return false;
  };

  return { placeShip, receiveAttack, allSunk };
};

export default Gameboard;
