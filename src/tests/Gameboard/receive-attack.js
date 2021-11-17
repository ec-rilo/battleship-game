import Ship from '../Ship/ship-logic';

function initShipsArr(shipsArr) {
  shipsArr.push(
    Ship([
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ])
  );
  shipsArr.push(
    Ship([
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 0, y: 5 },
    ])
  );
}

// For testing purposes, initializes board with ships
function initBoardArr(board) {
  board[0][0] = { populated: true, hit: false, ship: 0 };
  board[0][1] = { populated: true, hit: false, ship: 0 };

  board[0][3] = { populated: true, hit: false, ship: 1 };
  board[0][4] = { populated: true, hit: false, ship: 1 };
  board[0][5] = { populated: true, hit: false, ship: 1 };
}

const Gameboard = () => {
  const board = [];
  for (let i = 0; i < 11; ++i) {
    board.push([]);
    for (let j = 0; j < 11; ++j) {
      board[i][j] = { populated: false, hit: false, ship: undefined };
    }
  }

  const receiveAttack = (attackCoord) => {
    if (
      board[attackCoord.x][attackCoord.y].populated === true &&
      board[attackCoord.x][attackCoord.y].hit === false
    ) {
      board[attackCoord.x][attackCoord.y].hit = true;
    }
    return board[attackCoord.x][attackCoord.y]; // Remove this on the final product
  };

  return { receiveAttack, board };
};

const Gameboard2 = () => {
  const board = [];
  for (let i = 0; i < 11; ++i) {
    board.push([]);
    for (let j = 0; j < 11; ++j) {
      board[i][j] = { populated: false, hit: false, ship: undefined };
    }
  }
  initBoardArr(board);

  // Giving shipsArr test values
  const shipsArr = [];
  initShipsArr(shipsArr);

  const receiveAttack = () => {
    /*
     * The attack coords will be an argument when receiveAttack is called.
     * These are placeholder.
     */
    const attackCoords = {
      x: 0,
      y: 0,
    };

    if (
      board[attackCoords.x][attackCoords.y].populated === true &&
      board[attackCoords.x][attackCoords.y].hit === false
    ) {
      // Call the ship function and make it hit().
      // Get the ship and call a hit on it.
      board[attackCoords.x][attackCoords.y].hit = true;
      shipsArr[board[attackCoords.x][attackCoords.y].ship].hit(attackCoords);
      // Added this to sink the ship. Delete this in the final factory function.
      shipsArr[board[attackCoords.x][attackCoords.y].ship].hit({ x: 0, y: 1 });
    }
    return shipsArr[board[attackCoords.x][attackCoords.y].ship].isSunk();
  };

  return { receiveAttack };
};

const gameboard3 = Gameboard();
// Set as true to test when a ship actually populates the board.
gameboard3.board[0][0].populated = true;
gameboard3.board[0][0].ship = 0;

const gameboard6 = Gameboard2();

export { gameboard3, gameboard6 };
