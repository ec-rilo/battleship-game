import { popGBSquares } from './dom-creation';
import game from './game';

const popGBS = () => {
  const GB = [...document.querySelectorAll('.gameboard-interface')];
  GB.forEach((gameboard) => popGBSquares(gameboard));
};

function initProgram() {
  localStorage.setItem('userCoordsArr', JSON.stringify([]));
  popGBS();
  game.startGame();
}

export default initProgram;
