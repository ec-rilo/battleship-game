import Ship from './ship-logic';
import { defaultBoardArr } from './board-population';

const array2 = defaultBoardArr.map((arr) => [...arr]);
array2[0][0] = { populated: true, hit: false };
array2[0][1] = { populated: true, hit: false };

const Gameboard = () => {
  const board = [];
  for (let i = 0; i < 11; ++i) {
    board.push([]);
    for (let j = 0; j < 11; ++j) {
      board[i][j] = { populated: false, hit: false };
    }
  }
  const shipsArr = [
    Ship({ x: 0, y: 0 }, { x: 0, y: 1 }),
    Ship({ x: 0, y: 3 }, { x: 0, y: 4 }, { x: 0, y: 5 }),
    Ship({ x: 0, y: 7 }, { x: 0, y: 8 }, { x: 0, y: 9 }),
    Ship({ x: 3, y: 1 }, { x: 3, y: 2 }, { x: 3, y: 3 }, { x: 3, y: 4 }),
    Ship(
      { x: 7, y: 1 },
      { x: 7, y: 2 },
      { x: 7, y: 3 },
      { x: 7, y: 4 },
      { x: 7, y: 5 }
    ),
  ];

  const placeShip = () => {
    const shipCoords = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ];
    let available = false;
    for (let i = 0; i < shipCoords.length; ++i) {
      if (board[shipCoords[i].x][shipCoords[i].y].populated === false) {
        available = true;
      }
    }
    if (available === true) {
      for (let i = 0; i < shipCoords.length; ++i) {
        board[shipCoords[i].x][shipCoords[i].y].populated = true;
      }
      shipsArr.push(Ship(shipCoords));
      return board;
    }
    return "Can't place a ship here";
  };

  const receiveAttack = () => {
    const attackCoords = {
      x: 0,
      y: 0,
    };

    if (
      board[attackCoords.x][attackCoords.y].populated === true &&
      board[attackCoords.x][attackCoords.y].hit === false
    ) {
      // Call the ship function and make it hit().
      board[attackCoords.x][attackCoords.y].hit = true;
    } else {
      board[attackCoords.x][attackCoords.y].hit = true;
    }
    return board[attackCoords.x][attackCoords.y];
  };

  const isSunk = (ship) => ship.isSunk() === true;

  const reportShips = () => {
    if (shipsArr.every(isSunk) === true) return true;
    return false;
  };

  return { placeShip, receiveAttack, reportShips };
};

const test1 = Gameboard();

export { array2, test1 };
