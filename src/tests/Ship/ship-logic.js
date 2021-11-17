const Ship = (shipSquares) => {
  const hitSquares = [];
  for (let i = 0; i < shipSquares.length; ++i) {
    hitSquares.push(false);
  }

  const hit = (attackCoords) => {
    for (let i = 0; i < shipSquares.length; ++i) {
      if (
        shipSquares[i].x === attackCoords.x &&
        shipSquares[i].y === attackCoords.y
      ) {
        hitSquares[i] = true;
      }
    }
  };

  const isTrue = (currVal) => currVal === true;

  const isSunk = () => {
    if (hitSquares.every(isTrue)) {
      return true;
    }
    return false;
  };

  return { hit, isSunk };
};

export default Ship;
