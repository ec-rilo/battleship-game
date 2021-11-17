import userAttackPlayer1 from './user-attack';
import {
  compAttackPlayer1,
  compAttackPlayer1Arr,
  compAttackPlayer2,
  compAttackPlayer2Arr,
  compAttackEnemy3,
  compAttackPlayer3,
} from './comp-attack';

test('user is capable of attacking enemy computer', () => {
  expect(userAttackPlayer1.gameboard.allSunk()).toBeTruthy();
});

test('computer can attack enemy player', () => {
  expect(compAttackPlayer1.gameboard.board).toEqual(compAttackPlayer1Arr);
});

test('computer can attack enemy player at random spots', () => {
  expect(compAttackPlayer2.gameboard.board).toEqual(compAttackPlayer2Arr);
});

test('Computer will not attack a hit location', () => {
  expect(compAttackEnemy3.attack(compAttackPlayer3, 4, 1)).toMatch(
    'invalid entry'
  );
});
