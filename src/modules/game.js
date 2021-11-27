import Player from './player';
import compPlayer from './comp-player';
import { createWinPopup, createBlackBg, popGBSquares } from './dom-creation';
import createStartPopup from './start-popup/popup-creation';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

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
    const compShips = [
      [{}, {}, {}, {}, {}],
      [{}, {}, {}, {}],
      [{}, {}, {}],
      [{}, {}, {}],
      [{}, {}],
    ];

    const isActive = (elem) => elem.classList.contains('square-populated');

    const createHorizSquareArr = (currSquare, shipSize) => {
      let horizSquare = currSquare;
      const horizSquareArr = [];
      for (let i = 0; i < shipSize; ++i) {
        if (horizSquare !== null) {
          horizSquareArr.push(horizSquare);
          horizSquare = horizSquare.nextSibling;
        }
      }
      return horizSquareArr;
    };

    const createHorizCoords = (coord, shipSize) => {
      const xCoord = coord.x;
      let yCoord = coord.y;
      const horizSquareArr = [];

      for (let i = 0; i < shipSize; ++i) {
        const newCoord = { x: xCoord, y: yCoord };
        horizSquareArr.push(newCoord);
        yCoord += 1;
      }
      return horizSquareArr;
    };

    const createVertSquareArr = (currSquare, rowNum, squareNum, shipSize) => {
      let vertSquare = currSquare;
      const vertSquareArr = [];
      let rowNumTemp = rowNum;
      for (let i = 0; i < shipSize; ++i) {
        const row = [...compGB.children][rowNumTemp].children;
        vertSquare = row[squareNum];
        vertSquareArr.push(vertSquare);
        rowNumTemp += 1;
      }
      return vertSquareArr;
    };

    const createVertCoords = (coord, shipSize) => {
      let coordX = coord.x;
      const coordY = coord.y;
      const vertCoordArr = [];
      for (let i = 0; i < shipSize; ++i) {
        const vertSquare = { x: coordX, y: coordY };
        vertCoordArr.push(vertSquare);
        coordX += 1;
      }
      return vertCoordArr;
    };

    // create a coordArr of used coordinates
    let shipIndex = 0;
    while (compShips[shipIndex] !== undefined) {
      const gb = comp.gameboard.getBoard();
      const rowNum = getRandomInt(10);
      const squareNum = getRandomInt(10);
      const coord = { x: rowNum, y: squareNum };
      const square = [...compGB.children][rowNum].children[squareNum];

      // Checks rows and columns if they are valid for populating with ships.
      if (!gb[rowNum][squareNum].populated) {
        if (rowNum >= 0 && squareNum <= 10 - compShips[shipIndex].length) {
          const horizSquareArr = createHorizSquareArr(
            square,
            compShips[shipIndex].length
          );

          if (!horizSquareArr.some(isActive)) {
            const horizCoords = createHorizCoords(
              coord,
              compShips[shipIndex].length
            );
            comp.gameboard.placeShip(horizCoords);
            placeShip(horizCoords, compGB);
            shipIndex += 1;
          }
        } else if (
          squareNum >= 0 &&
          rowNum <= 10 - compShips[shipIndex].length
        ) {
          const vertSquareArr = createVertSquareArr(
            square,
            rowNum,
            squareNum,
            compShips[shipIndex].length
          );

          if (!vertSquareArr.some(isActive)) {
            const vertCoords = createVertCoords(
              coord,
              compShips[shipIndex].length
            );
            comp.gameboard.placeShip(vertCoords);
            placeShip(vertCoords, compGB);
            shipIndex += 1;
          }
        }
      }
    }
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
    console.log(user.gameboard.getBoard());
    console.log(comp.gameboard.getBoard());

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
    const background = createBlackBg();
    body.appendChild(background);
    body.appendChild(startPopup);

    const popupGb = document.querySelector('.popup-gb');
    popupGb.addEventListener('click', () => {
      const userShipsArr = JSON.parse(localStorage.getItem('userCoordsArr'));
      if (userShipsArr != null) {
        if (userShipsArr.length !== 0) {
          background.remove();
          populateGB();
          startLogic();
        }
      }
    });
  };

  const resetGame = () => {
    localStorage.setItem('userCoordsArr', JSON.stringify([]));
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
