import { ship1, ship2 } from './sunk-check';
import { ship3, ship4 } from './hit';

test('Returns false when some squares are hit', () => {
  expect(ship1.isSunk()).toBeFalsy();
});

test('Returns true when all squares are hit', () => {
  expect(ship2.isSunk()).toBeTruthy();
});

test('Correct location is marked as hit when hit() is called ', () => {
  expect(ship3.hit()).toEqual([false, true]);
});

test('Nothing is marked as hit when the hit() arg has a incorrect number', () => {
  expect(ship4.hit()).toEqual([false, false, false, false]);
});
