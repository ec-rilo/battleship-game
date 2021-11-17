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

  const shipsArr = [];

  const receiveAttack = (attackCoord) => {
    if (
      board[attackCoord.x][attackCoord.y].populated === true &&
      board[attackCoord.x][attackCoord.y].hit === false
    ) {
      board[attackCoord.x][attackCoord.y].hit = true;
      shipsArr[board[attackCoord.x][attackCoord.y].ship].hit(attackCoord);
    }
  };

  return { receiveAttack, board, shipsArr }; // shipsAarr will not be returned in the final product.
};

const gameboard3 = Gameboard();
initShipsArr(gameboard3.shipsArr);
// Set as true to test when a ship actually populates the board.
gameboard3.board[0][0].populated = true;
gameboard3.board[0][0].ship = 0;
// Below are test coordinates used to sink the ship.
gameboard3.receiveAttack({ x: 0, y: 0 });

const gameboard6 = Gameboard();
initBoardArr(gameboard6.board);
initShipsArr(gameboard6.shipsArr);
// Below are test coordinates used to sink the ship.
gameboard6.receiveAttack({ x: 0, y: 1 });
gameboard6.receiveAttack({ x: 0, y: 0 });

export { gameboard3, gameboard6 };
