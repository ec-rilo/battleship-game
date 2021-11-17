import userAttackPlayer1 from './user-attack';
import { compAttackPlayer1, compAttackPlayer1Arr } from './comp-attack';

test('user is capable of attacking enemy computer', () => {
  expect(userAttackPlayer1.gameboard.allSunk()).toBeTruthy();
});

test('computer can attack enemy player', () => {
  expect(compAttackPlayer1.gameboard.board).toEqual(compAttackPlayer1Arr);
});
