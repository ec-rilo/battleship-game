import { popGBSquares } from './dom-creation';

const popMainPage = () => {
  const GB1 = document.querySelector('.gameboard-1');
  popGBSquares(GB1);

  const GB2 = document.querySelector('.gameboard-2');
  popGBSquares(GB2);
};

function initProgram() {
  popMainPage();
}

export default initProgram;
