import Ship from '../Ship/ship-logic';
import { defaultBoardArr } from './board-population';

const populatedArr1 = defaultBoardArr.map((arr) => [...arr]);
populatedArr1[0][0] = { populated: true, hit: false, ship: 0 };
populatedArr1[0][1] = { populated: true, hit: false, ship: 0 };

const Gameboard = () => {
  const board = [];

  for (let i = 0; i < 10; ++i) {
    board.push([]);
    for (let j = 0; j < 10; ++j) {
      board[i][j] = { populated: false, hit: false, ship: undefined };
    }
  }

  const shipsArr = [];

  const placeShip = () => {
    /* Ship coords are placeholder, the coords should
     * be a argument when placeShip is called.
     */
    const shipCoords = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ];

    // Checks if the board coords have space to populate a ship on.
    // Available will determine if it's possible to populate a ship or not.
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
      return board;
    }
    return "Can't place a ship here";
  };

  return { placeShip };
};

const gameboard2 = Gameboard();

export { gameboard2, populatedArr1 };
