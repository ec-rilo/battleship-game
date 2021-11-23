import Ship from './ship';

const Gameboard = () => {
  let board = [];

  for (let i = 0; i < 10; ++i) {
    board.push([]);
    for (let j = 0; j < 10; ++j) {
      board[i][j] = { populated: false, hit: false, ship: undefined };
    }
  }

  const shipsArr = [];

  function getBoard() {
    return board;
  }

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

  const receiveAttack = (attackCoord) => {
    if (
      board[attackCoord.x][attackCoord.y].populated === true &&
      board[attackCoord.x][attackCoord.y].hit === false
    ) {
      board[attackCoord.x][attackCoord.y].hit = true;
      shipsArr[board[attackCoord.x][attackCoord.y].ship].hit(attackCoord);
    } else if (
      board[attackCoord.x][attackCoord.y].populated === false &&
      board[attackCoord.x][attackCoord.y].hit === false
    ) {
      board[attackCoord.x][attackCoord.y].hit = true;
    }
  };

  const isSunk = (ship) => ship.isSunk() === true;

  const allSunk = () => {
    if (shipsArr.every(isSunk) === true) return true;
    return false;
  };

  const resetBoard = () => {
    board = [];
    for (let i = 0; i < 10; ++i) {
      board.push([]);
      for (let j = 0; j < 10; ++j) {
        board[i][j] = { populated: false, hit: false, ship: undefined };
      }
    }
  };

  return { placeShip, receiveAttack, allSunk, getBoard, resetBoard };
};

export default Gameboard;
