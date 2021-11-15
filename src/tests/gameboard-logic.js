import Ship from './ship-logic';
const array = [
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
  [
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
    { populated: false, hit: false },
  ],
];

const array2 = array.map((arr) => [...arr]);
array2[0][0] = { populated: true, hit: false };
array2[0][1] = { populated: true, hit: false };

const popGameboard = () => {
  const board = [];

  const popBoard = () => {
    for (let i = 0; i < 11; ++i) {
      board.push([]);
      for (let j = 0; j < 11; ++j) {
        board[i][j] = { populated: false, hit: false };
      }
    }
    return board;
  };

  return { popBoard };
};

const Gameboard = () => {
  let board = [];
  for (let i = 0; i < 11; ++i) {
    board.push([]);
    for (let j = 0; j < 11; ++j) {
      board[i][j] = { populated: false, hit: false };
    }
  }

  let shipsArr = [];

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

  return { placeShip };
};

const player1 = popGameboard();
const test1 = Gameboard();

export { player1, array, array2, test1 };
