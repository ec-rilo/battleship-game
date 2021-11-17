import Gameboard from '../Gameboard/gameboard';

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const CompPlayer = () => {
  const gameboard = Gameboard();

  const attack = (enemy) => {
    let isValidCoord = false;

    while (isValidCoord === false) {
      const xCoord = getRandomInt(11);
      const yCoord = getRandomInt(11);
      const attackCoord = { x: xCoord, y: yCoord };
      if (enemy.gameboard.board[xCoord][yCoord].hit === false) {
        enemy.damage(attackCoord);
        isValidCoord = true;
      }
    }
  };

  const damage = (attackCoords) => {
    gameboard.receiveAttack(attackCoords);
  };

  return { attack, damage, gameboard };
};

export default CompPlayer;
