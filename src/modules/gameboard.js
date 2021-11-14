const Gameboard = () => {
  const board = [];

  for (let i = 0; i < 11; ++i) {
    board.push([]);
    for (let j = 0; j < 11; ++j) {
      board[i][j] = false;
    }
  }
};

export default Gameboard;
