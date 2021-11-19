/* When ALL are sunk test */
const Ship = (shipSquares) => {
  const hitSquares = [];
  // Setting hitSquares to be hit by default for testing purposes.
  for (let i = 0; i < shipSquares.length; ++i) {
    hitSquares.push(true);
  }

  const isTrue = (currVal) => currVal === true;

  const isSunk = () => {
    if (hitSquares.every(isTrue)) {
      return true;
    }
    return false;
  };

  return { isSunk };
};

const Gameboard = () => {
  const board = [];
  for (let i = 0; i < 10; ++i) {
    board.push([]);
    for (let j = 0; j < 10; ++j) {
      board[i][j] = { populated: false, hit: false };
    }
  }

  // Preset shipsArr
  const shipsArr = [
    Ship([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ]),
    Ship([
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 0, y: 5 },
    ]),
    Ship([
      { x: 0, y: 7 },
      { x: 0, y: 8 },
      { x: 0, y: 9 },
    ]),
    Ship([
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ]),
    Ship([
      { x: 7, y: 1 },
      { x: 7, y: 2 },
      { x: 7, y: 3 },
      { x: 7, y: 4 },
      { x: 7, y: 5 },
    ]),
  ];

  const isSunk = (ship) => ship.isSunk() === true;

  const allSunk = () => {
    if (shipsArr.every(isSunk) === true) return true;
    return false;
  };

  return { allSunk };
};

const gameboard4 = Gameboard();

/* When SOME are sunk test */

const Ship2 = (shipSquares) => {
  const hitSquares = [];
  // Setting hitSquares to be hit by default for testing purposes.
  for (let i = 0; i < shipSquares.length; ++i) {
    hitSquares.push(false);
  }

  const isTrue = (currVal) => currVal === true;

  const isSunk = () => {
    if (hitSquares.every(isTrue)) return true;
    return false;
  };

  return { isSunk };
};

const Gameboard2 = () => {
  const board = [];
  for (let i = 0; i < 10; ++i) {
    board.push([]);
    for (let j = 0; j < 10; ++j) {
      board[i][j] = { populated: false, hit: false };
    }
  }

  // Preset ships arr
  const shipsArr = [
    Ship([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ]),
    Ship([
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 0, y: 5 },
    ]),
    Ship2([
      { x: 0, y: 7 },
      { x: 0, y: 8 },
      { x: 0, y: 9 },
    ]),
    Ship2([
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ]),
    Ship2([
      { x: 7, y: 1 },
      { x: 7, y: 2 },
      { x: 7, y: 3 },
      { x: 7, y: 4 },
      { x: 7, y: 5 },
    ]),
  ];

  const isSunk = (ship) => ship.isSunk() === true;

  const allSunk = () => {
    if (shipsArr.every(isSunk) === true) return true;
    return false;
  };

  return { allSunk };
};

const gameboard5 = Gameboard2();

export { gameboard4, gameboard5 };
