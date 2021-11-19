function popGBSquares(gb) {
  for (let i = 0; i < 10; ++i) {
    const row = document.createElement('div');
    row.classList.add('gb-row');
    for (let j = 0; j < 10; ++j) {
      const column = document.createElement('div');
      column.classList.add('gb-column');
      row.appendChild(column);
    }
    gb.appendChild(row);
  }
}

export { popGBSquares };
