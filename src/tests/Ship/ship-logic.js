const Ship = (shipSquares) => {
  const hitSquares = [];
  for (let i = 0; i < shipSquares.length; ++i) {
    hitSquares.push(false);
  }

  const hit = (num) => {
    if (shipSquares.indexOf(num) !== -1) {
      hitSquares[shipSquares.indexOf(num)] = true;
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
