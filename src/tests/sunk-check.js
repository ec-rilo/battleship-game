const shipSquares = [
  { x: 0, y: 0 },
  { x: 0, y: 1 },
];

// Tests when some squares are hit.
const Ship = () => {
  const hitSquares = [];
  for (let i = 0; i < shipSquares.length; ++i) {
    hitSquares.push(false);
  }
  hitSquares[0] = true;

  const isTrue = (currVal) => currVal === true;

  const isSunk = () => {
    if (hitSquares.every(isTrue)) {
      return true;
    }
    return false;
  };

  return { isSunk };
};

const shipSquares2 = [
  { x: 3, y: 1 },
  { x: 3, y: 2 },
  { x: 3, y: 3 },
  { x: 3, y: 4 },
];

// Tests when all ships squares are hit.
const Ship2 = () => {
  const hitSquares = [];
  for (let i = 0; i < shipSquares2.length; ++i) {
    hitSquares.push(true);
  }

  const isTrue = (currVal) => currVal === true;

  const isSunk = () => {
    if (hitSquares.every(isTrue)) {
      return true;
    }
    return false;
  };

  return { isSunk };
};

const ship1 = Ship();
const ship2 = Ship2();

export { ship1, ship2 };
