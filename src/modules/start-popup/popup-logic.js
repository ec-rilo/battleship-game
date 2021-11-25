let popupShips = [
  [{}, {}, {}, {}, {}],
  [{}, {}, {}, {}],
  [{}, {}, {}],
  [{}, {}, {}],
  [{}, {}],
];

// Start Popup = spu
function spuGridLogic(grid, btnContainer) {
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
        let horizSquare = currSquare;
        const horizSquareArr = [];
        for (let i = 0; i < popupShips[count].length; ++i) {
          if (horizSquare !== null) {
            horizSquareArr.push(horizSquare);
            horizSquare = horizSquare.nextSibling;
          }
        }
        return horizSquareArr;
      };

      const createVertSquareArr = (currSquare, rowNum, squareNum) => {
        let vertSquare = currSquare;
        const vertSquareArr = [];
        let rowNumTemp = rowNum + 1;
        for (let i = 0; i < popupShips[count].length; ++i) {
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
        const shipSize = popupShips[count].length;
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

        const horizSquareArr = createHorizSquareArr(square);
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
        const shipSize = popupShips[count].length;
        const currRow = square.parentElement;
        const rowNum = parseInt(currRow.className.replace(/^\D+/g, ''), 10);
        const squareNum = parseInt(square.className.replace(/^\D+/g, ''), 10);

        const horizSquareArr = createHorizSquareArr(square);
        const vertSquareArr = createVertSquareArr(square, rowNum, squareNum);

        if (
          xAxisInvalid(squareNum, shipSize, horizSquareArr) ||
          yAxisInvalid(rowNum, shipSize, vertSquareArr)
        ) {
          console.log("Can't do that!");
        } else {
          // Places Ships Horizontally
          if (rotateXBtn.classList.contains('rotate-btn-active')) {
            let currSquare = square;
            let tempSquareNum = squareNum;
            for (let i = 0; i < popupShips[count].length; ++i) {
              currSquare.classList.add('popup-square-active');

              const coord = { x: rowNum, y: tempSquareNum };
              popupShips[count][i] = coord;
              tempSquareNum += 1;

              currSquare = currSquare.nextSibling;
            }
            count += 1;
          }

          // Places Ships Vertically
          if (rotateYBtn.classList.contains('rotate-btn-active')) {
            let currSquare = square;
            let tempRowNum = rowNum;
            for (let i = 0; i < popupShips[count].length; ++i) {
              currSquare = rowArr[rowNum + i][squareNum];
              currSquare.classList.add('popup-square-active');

              const coord = { x: tempRowNum, y: squareNum };
              popupShips[count][i] = coord;
              tempRowNum += 1;
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

export default spuGridLogic;
