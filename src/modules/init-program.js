import { popGBSquares } from './dom-creation';
import popup from './popup-card-logic';

const popGBS = () => {
  const GB = [...document.querySelectorAll('.gameboard-interface')];
  GB.forEach((gameboard) => popGBSquares(gameboard));
};

function initProgram() {
  popGBS();
  popup.startLogic();
}

export default initProgram;
