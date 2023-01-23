const gridContainer = document.querySelector('.grid-container');
const clearBoard = document.querySelector('.clear-board');
const numberSquares = document.querySelector('.number-of-squares');

// create dynamics grids on page load
for (let i = 0; i < 256; i++) {
  const grid = document.createElement('div');
  grid.classList.add('grids');
  grid.style.width = '31.25px';
  grid.style.height = '31.25px';
  gridContainer.appendChild(grid);
}

// get random color
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

// add background
function addBackground() {
  this.style.backgroundColor = getRandomColor();
}

// clear background
function clearBackground() {
  gridContainer.childNodes.forEach((grid) => {
    grid.style.backgroundColor = '';
  });
}

// create grids dynamically on user prompt
numberSquares.addEventListener('click', () => {
  let numSqrs = parseInt(prompt('How many squares'));
  if (numSqrs > 100) {
    alert('Grid dimension must be less than 100');
    return;
  }
  gridDimension = gridContainer.offsetHeight / numSqrs;
  numSqrs = Math.pow(numSqrs, 2);

  gridContainer.replaceChildren();

  for (let i = 0; i < numSqrs; i++) {
    let grid = document.createElement('div');
    grid.style.width = `${gridDimension}px`;
    grid.style.height = `${gridDimension}px`;
    gridContainer.appendChild(grid);
  }

  gridContainer.childNodes.forEach((grid) => {
    grid.addEventListener('mouseenter', addBackground);
  });
});

gridContainer.childNodes.forEach((grid) => {
  grid.addEventListener('mouseenter', addBackground);
});

clearBoard.addEventListener('click', clearBackground);
