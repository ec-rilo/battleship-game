import spuGridLogic from './popup-logic';

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

export default createStartPopup;
