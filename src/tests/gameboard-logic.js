// import Ship from '../modules/ship-creation';
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

const player1 = popGameboard();

export { player1, array };
