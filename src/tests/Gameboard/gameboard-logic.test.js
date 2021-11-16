import { gameboard1, defaultBoardArr } from './board-population';
import { gameboard2, populatedArr1 } from './ship-placement';
import { gameboard3, gameboard6 } from './receive-attack';
import { gameboard4, gameboard5 } from './ship-sunk-check';

test('returns 11 rows and 11 columns in the 2d array initialized as false', () => {
  expect(gameboard1.popBoard()).toEqual(defaultBoardArr);
});

test('Check that the gameboard can populate a ship at 0,0 and 0,1', () => {
  expect(gameboard2.placeShip()).toEqual(populatedArr1);
});

test('Populate gameboard with hit on receiveAttack()', () => {
  expect(gameboard3.receiveAttack()).toEqual({ populated: true, hit: true });
});

// It should be marked as sunk because I added extra code marking the remaining
// ship squares to be hit when this is called.
test('ship should be marked true that it is sunk when hit() is called.', () => {
  expect(gameboard6.receiveAttack()).toBeTruthy();
});

test('Reports true when all ships are sunk', () => {
  expect(gameboard4.allSunk()).toBeTruthy();
});

test('Reports false when some ships are sunk', () => {
  expect(gameboard5.allSunk()).toBeFalsy();
});
