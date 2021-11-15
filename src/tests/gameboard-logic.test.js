import { player1, test1, array, array2 } from './gameboard-logic';

test('popBoard returns a populated array with false values', () => {
  expect(player1.popBoard()).toEqual(array);
});

test('Place ship on gameboard that has false values', () => {
  expect(test1.placeShip()).toEqual(array2);
});

test('Populate gameboard with hit on recieveAttack()', () => {
  expect(test1.receiveAttack()).toEqual({ populated: true, hit: true });
});
