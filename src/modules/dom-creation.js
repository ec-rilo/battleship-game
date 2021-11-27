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

export { popGBSquares, removeStartPopup, createWinPopup, createBlackBg };
