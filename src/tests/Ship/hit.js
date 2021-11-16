const shipSquares = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
];

const attackCoords = { x: 0, y: 1 };

// Tests when attack coords hit.
const Ship = () => {
  const hitSquares = [];
  for (let i = 0; i < shipSquares.length; ++i) {
    hitSquares.push(false);
  }

  const hit = () => {
    for (let i = 0; i < shipSquares.length; ++i) {
      if (
        shipSquares[i].x === attackCoords.x &&
        shipSquares[i].y === attackCoords.y
      ) {
        hitSquares[i] = true;
        return hitSquares;
      }
    }
    return hitSquares;
  };

  return { hit };
};

const shipSquares2 = [
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
];

const attackCoords2 = { x: 0, y: 1 };

// Tests when attack coords miss
const Ship2 = () => {
  const hitSquares = [];
  for (let i = 0; i < shipSquares2.length; ++i) {
    hitSquares.push(false);
  }

  const hit = () => {
    for (let i = 0; i < shipSquares2.length; ++i) {
      if (
        shipSquares2[i].x === attackCoords2.x &&
        shipSquares2[i].y === attackCoords2.y
      ) {
        hitSquares[i] = true;
        return hitSquares;
      }
    }
    return hitSquares;
  };

  return { hit };
};

const ship3 = Ship();
const ship4 = Ship2();

export { ship3, ship4 };
