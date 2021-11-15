import { player1, test1, array2 } from './gameboard-logic';
import { gameboard1, defaultBoardArr } from './board-population';

test('returns 11 rows and 11 columns in the 2d array initialized as false', () => {
  expect(gameboard1.popBoard()).toEqual(defaultBoardArr);
});

test('Place ship on gameboard that has false values', () => {
  expect(test1.placeShip()).toEqual(array2);
});

test('Populate gameboard with hit on recieveAttack()', () => {
  expect(test1.receiveAttack()).toEqual({ populated: true, hit: true });
});
