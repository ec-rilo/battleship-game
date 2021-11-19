import { popGBSquares } from './dom-creation';

const popGBS = () => {
  const GB = [...document.querySelectorAll('.gameboard-interface')];
  GB.forEach((gameboard) => popGBSquares(gameboard));
};

function initProgram() {
  popGBS();
}

export default initProgram;
