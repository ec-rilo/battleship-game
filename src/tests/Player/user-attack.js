import Gameboard from '../Gameboard/gameboard';

function attackAllShips(user, enemy) {
  user.attack(enemy, {
    x: 7,
    y: 7,
  });
  user.attack(enemy, {
    x: 7,
    y: 8,
  });
  user.attack(enemy, {
    x: 7,
    y: 9,
  });
  user.attack(enemy, {
    x: 7,
    y: 10,
  });
}

function initShips1(player) {
  player.gameboard.placeShip([
    { x: 0, y: 3 },
    { x: 0, y: 4 },
    { x: 0, y: 5 },
  ]);
}

function initShips2(player) {
  player.gameboard.placeShip([
    { x: 7, y: 7 },
    { x: 7, y: 8 },
    { x: 7, y: 9 },
    { x: 7, y: 10 },
  ]);
}

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

const player1 = Player();
initShips1(player1);

const player2 = Player();
initShips2(player2);

attackAllShips(player1, player2);

export default player2;
