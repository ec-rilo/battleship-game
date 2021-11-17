import { gameboard1, defaultBoardArr } from './board-population';
import { gameboard2, populatedArr1 } from './ship-placement';
import {
  receiveAttackGB1,
  receiveAttackGB2,
  receiveAttackGB3,
} from './receive-attack';
import { gameboard4, gameboard5 } from './ship-sunk-check';

test('returns 11 rows and 11 columns in the 2d array initialized as false', () => {
  expect(gameboard1.popBoard()).toEqual(defaultBoardArr);
});

test('Check that the gameboard can populate a ship at 0,0 and 0,1', () => {
  expect(gameboard2.placeShip()).toEqual(populatedArr1);
});

test('Populate gameboard with hit on receiveAttack()', () => {
  expect(receiveAttackGB1.board[0][0]).toEqual({
    populated: true,
    hit: true,
    ship: 0,
  });
});

// Expected ship should be marked as sunk.
// I marked the remaining shipSquares as hit when receiveAttack() is called.
test('ship should be marked true that it is sunk when hit() is called.', () => {
  expect(
    receiveAttackGB2.shipsArr[receiveAttackGB2.board[0][0].ship].isSunk()
  ).toBeTruthy();
});

test('Gameboard can be marked as hit when populated and hit are false.', () => {
  expect(receiveAttackGB3.board[3][0]).toEqual({
    populated: false,
    hit: true,
    ship: undefined,
  });
});

// Test when board is not populated and board is not hit for receiveAttack() function.

test('Reports true when all ships are sunk', () => {
  expect(gameboard4.allSunk()).toBeTruthy();
});

test('Reports false when some ships are sunk', () => {
  expect(gameboard5.allSunk()).toBeFalsy();
});
