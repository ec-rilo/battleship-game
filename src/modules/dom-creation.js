function popGBSquares(gb) {
  for (let i = 0; i < 10; ++i) {
    const row = document.createElement('div');
    row.classList.add('gb-row');
    row.classList.add(`gb-row-${i}`);
    for (let j = 0; j < 10; ++j) {
      const square = document.createElement('div');
      square.classList.add('gb-square');
      square.classList.add(`gb-square-${j}`);
      row.appendChild(square);
    }
    gb.appendChild(row);
  }
}

// Start Popup = spu
function spuGridLogic(grid, btnContainer) {
  let ships = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}],
    [{}, {}, {}],
    [{}, {}, {}],
    [{}, {}],
  ];

  let count = 0;

  const rotateXBtn = btnContainer.firstChild;
  const rotateYBtn = btnContainer.firstChild.nextSibling;

  rotateXBtn.addEventListener('click', () => {
    rotateXBtn.classList.add('rotate-btn-active');
    if (rotateYBtn.classList.contains('rotate-btn-active')) {
      rotateYBtn.classList.remove('rotate-btn-active');
    }
  });

  rotateYBtn.addEventListener('click', () => {
    rotateYBtn.classList.add('rotate-btn-active');
    if (rotateXBtn.classList.contains('rotate-btn-active')) {
      rotateXBtn.classList.remove('rotate-btn-active');
    }
  });

  const initEachSquare = (row, rows, rowArr) => {
    row.forEach((square) => {
      const createHorizSquareArr = (currSquare) => {
        const horizSquareArr = [];
        for (let i = 0; i < ships[count].length; ++i) {
          if (currSquare !== null) {
            horizSquareArr.push(currSquare);
            currSquare = currSquare.nextSibling;
          }
        }
        return horizSquareArr;
      };

      const createVertSquareArr = (currSquare, rowNum, squareNum) => {
        let vertSquare = currSquare;
        const vertSquareArr = [];
        let rowNumTemp = rowNum + 1;
        for (let i = 0; i < ships[count].length; ++i) {
          if (rowNumTemp < 10) {
            vertSquareArr.push(vertSquare);
            vertSquare = [...rows[rowNumTemp].children][squareNum];
            rowNumTemp += 1;
          }
        }
        return vertSquareArr;
      };

      const isActive = (elem) => elem.classList.contains('popup-square-active');

      const xAxisInvalid = (squareNum, shipSize, horizSquareArr) => {
        if (
          (rotateXBtn.classList.contains('rotate-btn-active') &&
            squareNum + shipSize > 10) ||
          (rotateXBtn.classList.contains('rotate-btn-active') &&
            horizSquareArr.some(isActive))
        ) {
          return true;
        }
        return false;
      };

      const yAxisInvalid = (rowNum, shipSize, vertSquareArr) => {
        if (
          (rotateYBtn.classList.contains('rotate-btn-active') &&
            rowNum + shipSize > 10) ||
          (rotateYBtn.classList.contains('rotate-btn-active') &&
            vertSquareArr.some(isActive))
        ) {
          return true;
        }
        return false;
      };

      square.addEventListener('mouseover', () => {
        const shipSize = ships[count].length;
        const hoverShip = document.createElement('div');
        hoverShip.classList.add('floating-ship-hover');

        const currRow = square.parentElement;
        const rowNum = parseInt(currRow.className.replace(/^\D+/g, ''), 10);
        const squareNum = parseInt(square.className.replace(/^\D+/g, ''), 10);

        /* calc() is used to make it so the hover ship doesn't underflow
         * it's required boxes.
         *
         * shipSize will determine the amount of boxes to cover
         *
         * shipSize * 2 is the offset needed to make the hover ship fit
         * it's required boxes.
         */
        if (rotateXBtn.classList.contains('rotate-btn-active')) {
          hoverShip.style.width = `calc(${shipSize}00% + ${shipSize * 2}px)`;
          hoverShip.style.height = '100%';
        } else if (rotateYBtn.classList.contains('rotate-btn-active')) {
          hoverShip.style.height = `calc(${shipSize}00% + ${shipSize * 2}px)`;
          hoverShip.style.width = '100%';
        }

        // Horizontal Squares Check
        const horizSquareArr = createHorizSquareArr(square);

        // Vertical Squares Check
        const vertSquareArr = createVertSquareArr(square, rowNum, squareNum);

        if (xAxisInvalid(squareNum, shipSize, horizSquareArr)) {
          hoverShip.classList.add('square-error');
        } else if (yAxisInvalid(rowNum, shipSize, vertSquareArr)) {
          hoverShip.classList.add('square-error');
        }

        square.appendChild(hoverShip);
      });
      square.addEventListener('mouseout', () => {
        if (square.firstChild) {
          square.firstChild.remove();
        }
      });
      square.addEventListener('click', () => {
        const shipSize = ships[count].length;
        const currRow = square.parentElement;
        const rowNum = parseInt(currRow.className.replace(/^\D+/g, ''), 10);
        const squareNum = parseInt(square.className.replace(/^\D+/g, ''), 10);

        // Horizontal Squares Check
        const horizSquareArr = createHorizSquareArr(square);

        // Vertical Squares Check
        const vertSquareArr = createVertSquareArr(square, rowNum, squareNum);

        if (xAxisInvalid(squareNum, shipSize, horizSquareArr)) {
          console.log("Can't do that!");
        } else if (yAxisInvalid(rowNum, shipSize, vertSquareArr)) {
          console.log("Can't do that!");
        } else {
          // Places Ships Horizontally
          if (
            rotateXBtn.classList.contains('rotate-btn-active') &&
            squareNum + shipSize <= 10 &&
            !square.classList.contains('popup-square-active')
          ) {
            let currSquare = square;
            for (let i = 0; i < ships[count].length; ++i) {
              currSquare.classList.add('popup-square-active');
              currSquare = currSquare.nextSibling;
            }
            count += 1;
          }

          // Places Ships Vertically
          if (
            rotateYBtn.classList.contains('rotate-btn-active') &&
            rowNum + shipSize <= 10 &&
            !square.classList.contains('popup-square-active')
          ) {
            let currSquare = square;
            for (let i = 0; i < ships[count].length; ++i) {
              currSquare.classList.add('popup-square-active');
              currSquare = rowArr[rowNum + (i + 1)][squareNum];
            }
            count += 1;
          }
        }
      });
    });
  };

  const rows = [...grid.children];
  const rowSquares = [];
  rows.forEach((row) => rowSquares.push([...row.children]));
  rowSquares.forEach((row) => initEachSquare(row, rows, rowSquares));
}

function createStartPopup() {
  const createCard = () => {
    const card = document.createElement('div');
    card.classList.add('ship-placement-popup-container');
    return card;
  };

  const createTextContainer = () => {
    const container = document.createElement('div');
    container.classList.add('popup-text-container');

    const title = document.createElement('p');
    title.innerHTML = 'Welcome to BATTLESHIP!';
    container.appendChild(title);

    const subTitle = document.createElement('p');
    subTitle.innerHTML = `Place your <u>Carrier</u>`;
    container.appendChild(subTitle);

    return container;
  };

  const createBtnContainer = () => {
    const container = document.createElement('div');
    container.classList.add('rotate-ship-btn-container');

    const xBtn = document.createElement('div');
    xBtn.classList.add('rotate-x-btn');
    xBtn.classList.add('rotate-btn');
    xBtn.classList.add('rotate-btn-active');
    xBtn.innerHTML = 'Rotate - X';
    container.appendChild(xBtn);

    const yBtn = document.createElement('div');
    yBtn.classList.add('rotate-y-btn');
    yBtn.classList.add('rotate-btn');
    yBtn.innerHTML = 'Rotate - Y';
    container.appendChild(yBtn);

    return container;
  };

  const createGridContainer = () => {
    const container = document.createElement('div');
    container.classList.add('popup-gb-container');

    const gameboard = document.createElement('div');
    gameboard.classList.add('popup-gb');
    gameboard.classList.add('gameboard-interface');
    container.appendChild(gameboard);

    for (let i = 0; i < 10; ++i) {
      const row = document.createElement('div');
      row.classList.add('gb-row');
      row.classList.add(`gb-popup-start-row-${i}`);
      for (let j = 0; j < 10; ++j) {
        const square = document.createElement('div');
        square.classList.add('gb-square');
        square.classList.add(`gb-popup-start-square-${j}`);
        row.appendChild(square);
      }
      gameboard.appendChild(row);
    }

    return container;
  };

  const card = createCard();
  const textContainer = createTextContainer();
  const btnContainer = createBtnContainer();
  const gridContainer = createGridContainer();

  const containerArr = [textContainer, btnContainer, gridContainer];
  containerArr.forEach((container) => card.appendChild(container));
  spuGridLogic(gridContainer.firstChild, btnContainer);

  return card;
}

function removeStartPopup() {
  const card = document.createElement('div');
  card.classList.add('ship-placement-popup-container');
  card.remove();
}

function createWinPopup(userWin) {
  const card = document.createElement('div');
  card.classList.add('win-popup');

  const winMsg = document.createElement('p');
  if (userWin) {
    winMsg.innerHTML = 'You Win!';
  } else {
    winMsg.innerHTML = 'You Lose!';
  }
  card.appendChild(winMsg);

  const replayBtn = document.createElement('div');
  replayBtn.classList.add('replay-btn');
  const replayText = document.createElement('p');
  replayText.innerHTML = 'Play again';
  replayBtn.appendChild(replayText);
  card.appendChild(replayBtn);

  return card;
}

function createBlackBg() {
  const background = document.createElement('div');
  background.classList.add('black-bg');

  return background;
}

export {
  popGBSquares,
  createStartPopup,
  removeStartPopup,
  createWinPopup,
  createBlackBg,
};
