/*
 * Computer is capable of making random plays
 * Computer should know whether a move is legal
 *  - Can't shoot the same coordinates twice.
 *  - Can only shoot coordinates within the board size.
 */

import Gameboard from '../Gameboard/gameboard';
import Player from './player';
import { defaultBoardArr } from '../Gameboard/board-population';

// Sets the playerArr to have player1's values.
// It's the equivalent of player1 board
const compAttackPlayer1Arr = defaultBoardArr.map((arr) => [...arr]);
compAttackPlayer1Arr[0][3] = { populated: true, hit: false, ship: 0 };
compAttackPlayer1Arr[0][4] = { populated: true, hit: false, ship: 0 };
compAttackPlayer1Arr[0][5] = { populated: true, hit: false, ship: 0 };
compAttackPlayer1Arr[4][1] = { populated: false, hit: true, ship: undefined };

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

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const CompPlayer = () => {
  const gameboard = Gameboard();

  // xCoord and yCoord will not be arguments in final product.
  const attack = (enemy, xCoord, yCoord) => {
    let isValidCoord = false;
    // Count only used to test if comp will only attack same spot once.
    let count = 0; // Count will not be in final product
    while (isValidCoord === false && count !== 5) {
      // xCoord here. use getRandomInt() to populated xCoord. Final product info.
      // yCoord here. use getRandomInt() to populated yCoord. Final product info.
      const attackCoord = { x: xCoord, y: yCoord };
      if (enemy.gameboard.board[xCoord][yCoord].hit === false) {
        enemy.damage(attackCoord);
        isValidCoord = true;
      }
      count += 1; // remove in final product
    }
    // In final product, this 'return' and 'if' will not be here.
    if (count === 5) {
      return 'invalid entry';
    }
  };

  const damage = (attackCoords) => {
    gameboard.receiveAttack(attackCoords);
  };

  return { attack, damage, gameboard };
};

/* Computer is capable of attacking player */
const compAttackPlayer1 = Player();
initShips1(compAttackPlayer1);

const compAttackEnemy1 = CompPlayer();
initShips2(compAttackEnemy1);
compAttackEnemy1.attack(compAttackPlayer1, 4, 1);

/* Computer can attack a random location */
const compAttackPlayer2 = Player();
initShips1(compAttackPlayer2);

const compAttackEnemy2 = CompPlayer();
initShips2(compAttackEnemy2);
const randXVal = getRandomInt(11);
const randYVal = getRandomInt(11);
compAttackEnemy2.attack(compAttackPlayer2, randXVal, randYVal);

const compAttackPlayer2Arr = defaultBoardArr.map((arr) => [...arr]);
compAttackPlayer2Arr[0][3] = { populated: true, hit: false, ship: 0 };
compAttackPlayer2Arr[0][4] = { populated: true, hit: false, ship: 0 };
compAttackPlayer2Arr[0][5] = { populated: true, hit: false, ship: 0 };
compAttackPlayer2Arr[randXVal][randYVal] = {
  populated: false,
  hit: true,
  ship: undefined,
};

/* Computer will not attack a hit location */

const compAttackPlayer3 = Player();
initShips1(compAttackPlayer3);

const compAttackEnemy3 = CompPlayer();
initShips2(compAttackEnemy3);
compAttackEnemy3.attack(compAttackPlayer3, 4, 1);

export {
  compAttackPlayer1,
  compAttackPlayer1Arr,
  compAttackPlayer2,
  compAttackPlayer2Arr,
  compAttackEnemy3,
  compAttackPlayer3,
};
