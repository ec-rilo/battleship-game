import { player1 } from './gameboard-logic';
import { array } from './gameboard-logic';

test('popBoard returns a populated array with false values', () => {
  expect(player1.popBoard()).toEqual(array);
});
