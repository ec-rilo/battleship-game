import userAttackPlayer1 from './user-attack';
import {
  compAttackPlayer1,
  compAttackPlayer1Arr,
  compAttackPlayer2,
  compAttackPlayer2Arr,
  compAttackEnemy3,
  compAttackPlayer3,
} from './comp-attack';
import { coordsCheckComp, coordsCheckPlayer } from './comp-random-coords-check';

test('user is capable of attacking enemy computer', () => {
  expect(userAttackPlayer1.gameboard.allSunk()).toBeTruthy();
});

test('computer can attack enemy player', () => {
  expect(compAttackPlayer1.gameboard.getBoard()).toEqual(compAttackPlayer1Arr);
});

test('computer can attack enemy player at random spots', () => {
  expect(compAttackPlayer2.gameboard.getBoard()).toEqual(compAttackPlayer2Arr);
});

test('Computer will not attack a hit location', () => {
  expect(compAttackEnemy3.attack(compAttackPlayer3, 4, 1)).toMatch(
    'invalid entry'
  );
});

coordsCheckComp.attack(coordsCheckPlayer);
test('computer will return attackCoords that it generates on attack()', () => {
  expect(coordsCheckComp.getAttackCoord()).toEqual({ x: 4, y: 2 });
});
