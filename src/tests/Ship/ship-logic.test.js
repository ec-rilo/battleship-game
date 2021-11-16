import { ship1, ship2 } from './sunk-check';

test('Returns false when some squares are hit', () => {
  expect(ship1.isSunk()).toBeFalsy();
});

test('Returns true when all squares are hit', () => {
  expect(ship2.isSunk()).toBeTruthy();
});
