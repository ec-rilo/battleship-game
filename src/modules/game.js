import Player from './player';
import compPlayer from './comp-player';
import { createWinPopup, createBlackBg, popGBSquares } from './dom-creation';
import createStartPopup from './start-popup/popup-creation';

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

  const resetBoard = (gb) => {
    const rows = [...gb.children];
    rows.forEach((row) => {
      row.remove();
    });
  };

  const initUserShips = () => {
    const userShipsArr = JSON.parse(localStorage.getItem('userCoordsArr'));
    for (let i = 0; i < userShipsArr.length; ++i) {
      user.gameboard.placeShip(userShipsArr[i]);
      placeShip(userShipsArr[i], userGB);
    }
  };

  const initCompShips = () => {
    const compShip1 = [
      { x: 5, y: 1 },
      { x: 5, y: 2 },
    ];

    const compShip2 = [
      { x: 2, y: 6 },
      { x: 2, y: 7 },
      { x: 2, y: 8 },
    ];

    const compShip3 = [
      { x: 4, y: 6 },
      { x: 4, y: 7 },
      { x: 4, y: 8 },
    ];

    const compShip4 = [
      { x: 7, y: 6 },
      { x: 7, y: 7 },
      { x: 7, y: 8 },
      { x: 7, y: 9 },
    ];

    const compShip5 = [
      { x: 9, y: 5 },
      { x: 9, y: 6 },
      { x: 9, y: 7 },
      { x: 9, y: 8 },
      { x: 9, y: 9 },
    ];

    comp.gameboard.placeShip(compShip1);
    placeShip(compShip1, compGB);

    comp.gameboard.placeShip(compShip2);
    placeShip(compShip2, compGB);

    comp.gameboard.placeShip(compShip3);
    placeShip(compShip3, compGB);

    comp.gameboard.placeShip(compShip4);
    placeShip(compShip4, compGB);

    comp.gameboard.placeShip(compShip5);
    placeShip(compShip5, compGB);
  };

  const initHits = (gb) => {
    const rows = [...gb.children];
    for (let i = 0; i < rows.length; ++i) {
      const row = rows[i];

      const rowSquares = [...row.children];

      rowSquares.forEach((square) => {
        square.addEventListener('click', () => {
          const name = square.className;
          const rowNum = parseInt(name.replace(/\D/g, ''), 10);
          user.attack(comp, { x: i, y: rowNum });
          square.classList.add('square-hit');
          if (square.classList.contains('square-populated')) {
            square.classList.add('direct-square-hit');
          }
          if (comp.gameboard.allSunk()) {
            const body = document.querySelector('body');
            const background = createBlackBg();
            body.appendChild(background);
            const winPopup = createWinPopup(true);
            body.appendChild(winPopup);
            const replayBtn = document.querySelector('.replay-btn');
            replayBtn.addEventListener('click', () => resetGame());
          }
        });
      });
    }
  };

  const initHoverColor = (gb) => {
    const rows = [...gb.children];
    for (let i = 0; i < rows.length; ++i) {
      const row = rows[i];

      const rowSquares = [...row.children];

      rowSquares.forEach((square) => {
        square.addEventListener('mouseover', () => {
          if (!square.classList.contains('square-hit')) {
            square.classList.add('square-hover');
          }
        });

        square.addEventListener('mouseout', () => {
          square.classList.remove('square-hover');
        });
      });
    }
  };

  const initCompBoard = () => {
    initCompShips();
    initHoverColor(compGB);
    initHits(compGB);
  };

  const initUserBoard = () => {
    initUserShips();
  };

  const attackUser = (attackCoord) => {
    const row = [...[...userGB.children][attackCoord.x].children];
    const hitSquare = row[attackCoord.y];
    if (hitSquare.classList.contains('square-populated')) {
      hitSquare.classList.add('direct-square-hit');
    } else {
      hitSquare.classList.add('square-hit');
    }
  };

  const populateGB = () => {
    initUserBoard();
    initCompBoard();
  };

  const startLogic = () => {
    // Listens for user to click so enemy can attack.
    const rows = [...compGB.children];
    for (let i = 0; i < rows.length; ++i) {
      const row = rows[i];
      const rowSquares = [...row.children];
      rowSquares.forEach((square) => {
        square.addEventListener('click', () => {
          if (!comp.gameboard.allSunk()) {
            if (!square.classList.contains('marked')) {
              square.classList.add('marked');
              comp.attack(user);
              attackUser(comp.getAttackCoord());
            }
            if (user.gameboard.allSunk()) {
              const body = document.querySelector('body');
              const background = createBlackBg();
              body.appendChild(background);
              const winPopup = createWinPopup(false);
              body.appendChild(winPopup);
              const replayBtn = document.querySelector('.replay-btn');
              replayBtn.addEventListener('click', () => resetGame());
            }
          }
        });
      });
    }
  };

  const startGame = () => {
    const body = document.querySelector('body');
    const startPopup = createStartPopup();
    body.appendChild(startPopup);

    const popupGb = document.querySelector('.popup-gb');
    popupGb.addEventListener('click', () => {
      const userShipsArr = JSON.parse(localStorage.getItem('userCoordsArr'));
      if (userShipsArr != null) {
        populateGB();
        startLogic();
      }
    });
  };

  const resetGame = () => {
    user.gameboard.resetBoard();
    comp.gameboard.resetBoard();

    const winPopup = document.querySelector('.win-popup');
    const blackBg = document.querySelector('.black-bg');
    winPopup.remove();
    blackBg.remove();

    resetBoard(userGB);
    resetBoard(compGB);
    popGBSquares(userGB);
    popGBSquares(compGB);
    startGame();
  };

  return { startGame, resetGame };
};

const game = Game();

export default game;
