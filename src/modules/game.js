import Player from './player';
import compPlayer from './comp-player';

const Game = () => {
  const user = Player();
  const comp = compPlayer();
  const userGB = document.querySelector('.gameboard-1');
  const compGB = document.querySelector('.gameboard-2');

  const placeShip = (coords, gb) => {
    const rows = [...gb.children];
    for (let i = 0; i < coords.length; ++i) {
      const coord = coords[i];

      const row = rows[coord.x];

      const rowSquares = [...row.children];
      const square = rowSquares[coord.y];
      square.classList.add('square-populated');
    }
  };

  const initUserShips = () => {
    const userShip1 = [
      { x: 0, y: 0 },
      { x: 0, y: 1 },
    ];

    const userShip2 = [
      { x: 0, y: 3 },
      { x: 0, y: 4 },
      { x: 0, y: 5 },
    ];

    const userShip3 = [
      { x: 0, y: 7 },
      { x: 0, y: 8 },
      { x: 0, y: 9 },
    ];

    const userShip4 = [
      { x: 3, y: 1 },
      { x: 3, y: 2 },
      { x: 3, y: 3 },
      { x: 3, y: 4 },
    ];

    const userShip5 = [
      { x: 7, y: 1 },
      { x: 7, y: 2 },
      { x: 7, y: 3 },
      { x: 7, y: 4 },
      { x: 7, y: 5 },
    ];

    user.gameboard.placeShip(userShip1);
    placeShip(userShip1, userGB);

    user.gameboard.placeShip(userShip2);
    placeShip(userShip2, userGB);

    user.gameboard.placeShip(userShip3);
    placeShip(userShip3, userGB);

    user.gameboard.placeShip(userShip3);
    placeShip(userShip4, userGB);

    user.gameboard.placeShip(userShip3);
    placeShip(userShip5, userGB);
  };

  const startGame = () => {
    initUserShips();
    let end = false;
    // while (end != true) {
    //   //
    // }
  };

  return { startGame };
};

const game = Game();

export default game;
