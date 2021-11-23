import Gameboard from '../Gameboard/gameboard';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const CompPlayer = () => {
  const gameboard = Gameboard();
  let attackCoord = {};

  const attack = (enemy) => {
    let isValidCoord = false;

    while (isValidCoord === false) {
      const xCoord = getRandomInt(10);
      const yCoord = getRandomInt(10);
      attackCoord = { x: xCoord, y: yCoord };
      if (enemy.gameboard.board[xCoord][yCoord].hit === false) {
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

export default CompPlayer;
