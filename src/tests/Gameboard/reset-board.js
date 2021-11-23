const Gameboard = () => {
  let board = [];

  for (let i = 0; i < 10; ++i) {
    board.push([]);
    for (let j = 0; j < 10; ++j) {
      // Purposely set populated to true
      board[i][j] = { populated: true, hit: false, ship: undefined };
    }
  }

  const resetBoard = () => {
    board = [];
    for (let i = 0; i < 10; ++i) {
      board.push([]);
      for (let j = 0; j < 10; ++j) {
        board[i][j] = { populated: false, hit: false, ship: undefined };
      }
    }
  };

  function getBoard() {
    return board;
  }

  return { resetBoard, getBoard };
};

const resetBoard = Gameboard();
resetBoard.resetBoard();

export default resetBoard;
