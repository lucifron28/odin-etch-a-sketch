document.addEventListener("DOMContentLoaded", (event) => {
  const container = document.getElementsByClassName('grid-container')[0];
  const clearButton = document.getElementById('clear-button');
  const sizeButton = document.getElementById('size-button');

  let size = 16;

  function createGrid(size) {
    container.style.gridTemplateColumns(`repeat(${size}, 1fr)`)
    container.style.gridTemplateRows(`repeat(${size}, 1fr)`)
    for (let i = 0; i < size * size; i++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      container.appendChild(cell);
    }

  }
  sizeButton.addEventListener("click", () => {
    size = prompt("Enter the grid size: ");
    createGrid(size);
  });

  createGrid(size);
});
