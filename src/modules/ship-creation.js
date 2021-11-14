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

  return { hit };
};
