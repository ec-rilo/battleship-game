// import Ship from '../modules/ship-creation';

// const coordinates = ['1G, 1H, 1I, 1J'];

const Gameboard = () => {
  const board = [];

  const popBoard = () => {
    for (let i = 0; i < 11; ++i) {
      board.push([]);
      for (let j = 0; j < 11; ++j) {
        board[i][j] = false;
      }
    }
    return board;
  };

  return { popBoard };
};

const player1 = Gameboard();

export default player1;
