import player2 from './user-attack';

test('user is capable of attacking enemy computer', () => {
  expect(player2.gameboard.allSunk()).toBeTruthy();
});
