import Gameboard from './gameboard';

const Player = () => {
  const gameboard = Gameboard();

  const attack = (enemy, attackCoords) => {
    enemy.damage(attackCoords);
  };

  const damage = (attackCoords) => {
    gameboard.receiveAttack(attackCoords);
  };

  return { attack, damage, gameboard };
};

export default Player;
