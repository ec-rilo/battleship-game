// Will create the initial popup and delete it
import { createStartPopup } from './dom-creation';

const popupLogic = () => {
  const card = createStartPopup();
  const body = document.querySelector('body');
  body.appendChild(card);
  const grid = document.querySelector('.popup-gb');

  const initRowSquares = (row) => {
    const rowSquares = [...row.children];
    rowSquares.forEach((square) => {
      square.addEventListener('mouseover', () => {
        square.classList.add('square-hover');
      });

      square.addEventListener('mouseout', () => {
        square.classList.remove('square-hover');
      });
    });
  };

  const initGBRows = () => {
    const gridRows = [...grid.children];
    gridRows.forEach((row) => {
      initRowSquares(row);
    });
  };

  const startLogic = () => {
    initGBRows();
  };

  return { startLogic };
};

const popup = popupLogic();

export default popup;
