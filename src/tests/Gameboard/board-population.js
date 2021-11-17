const defaultBoardArr = [
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
  [
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
    { populated: false, hit: false, ship: undefined },
  ],
];

const popGameboard = () => {
  const board = [];

  const popBoard = () => {
    for (let i = 0; i < 11; ++i) {
      board.push([]);
      for (let j = 0; j < 11; ++j) {
        board[i][j] = { populated: false, hit: false, ship: undefined };
      }
    }
    return board;
  };

  return { popBoard };
};

const gameboard1 = popGameboard();

export { gameboard1, defaultBoardArr };
