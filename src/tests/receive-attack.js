const Gameboard = () => {
  const board = [];
  for (let i = 0; i < 11; ++i) {
    board.push([]);
    for (let j = 0; j < 11; ++j) {
      board[i][j] = { populated: false, hit: false };
    }
  }

  // Set as true to test when a ship actually populates it.
  board[0][0].populated = true;

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
      board[attackCoords.x][attackCoords.y].hit = true;
    } else {
      board[attackCoords.x][attackCoords.y].hit = true;
    }
    return board[attackCoords.x][attackCoords.y];
  };

  return { receiveAttack };
};

const gameboard3 = Gameboard();

export default gameboard3;
