import userAttackPlayer1 from './user-attack';

test('user is capable of attacking enemy computer', () => {
  expect(userAttackPlayer1.gameboard.allSunk()).toBeTruthy();
});

// test if computer is capable of making attacks.
