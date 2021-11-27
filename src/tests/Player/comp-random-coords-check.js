import Gameboard from '../Gameboard/gameboard';
import Player from './player';

function initShips1(player) {
  player.gameboard.placeShip([
    { x: 0, y: 3 },
    { x: 0, y: 4 },
    { x: 0, y: 5 },
  ]);
}

const CompPlayer = () => {
  const gameboard = Gameboard();
  let attackCoord = {};

  const attack = (enemy) => {
    let isValidCoord = false;

    while (isValidCoord === false) {
      const xCoord = 4; // Placeholder to see if attackCoord will be returned
      const yCoord = 2; // Placeholder to see if attackCoord will be returned
      attackCoord = { x: xCoord, y: yCoord };
      const enemyGB = enemy.gameboard.getBoard();
      if (enemyGB[xCoord][yCoord].hit === false) {
        enemy.damage(attackCoord);
        isValidCoord = true;
      }
    }
  };

  function getAttackCoord() {
    return attackCoord;
  }

  const damage = (attackCoords) => {
    gameboard.receiveAttack(attackCoords);
  };

  return { attack, damage, gameboard, getAttackCoord };
};

const coordsCheckPlayer = Player();
initShips1(coordsCheckPlayer);
const coordsCheckComp = CompPlayer();

export { coordsCheckComp, coordsCheckPlayer };
