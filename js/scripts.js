function createBox() {
  const div = document.createElement('div');
  div.classList.add('square');
  return div;
}

function createRow(numSquares) {
  const row = document.createElement('div');
  row.classList.add('row');

  for (let x = 0; x < numSquares; x += 1) {
    const div = createBox();
    row.appendChild(div);

    div.addEventListener('mouseenter', (e) => {
      e.target.style.background = 'black';
    });
  }
  const container = document.getElementById('grid-container');
  container.append(row);
}

function resizeBox(numSquares) {
  const size = Math.floor((960 - ((numSquares * 2) - 2)) / numSquares);

  const squares = document.querySelectorAll('.square');
  for (let x = 0; x < squares.length; x += 1) {
    squares[x].style.width = `${size}px`;
    squares[x].style.height = `${size}px`;
  }
}

function removeGrid() {
  const squares = document.querySelectorAll('.square');
  for (let x = 0; x < squares.length; x += 1) {
    squares[x].remove();
  }
}

function createGrid(numSquares) {
  for (let x = 0; x < numSquares; x += 1) {
    createRow(numSquares);
  }
  resizeBox(numSquares);
}

createGrid(30);

const button = document.getElementById('redraw');
button.addEventListener('click', () => {
  const slider = document.getElementById('slider');
  const gridSize = slider.value;
  removeGrid();
  createGrid(gridSize);
});
