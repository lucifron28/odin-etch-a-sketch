document.addEventListener("DOMContentLoaded", (event) => {
  const container = document.getElementsByClassName('grid-container')[0];
  const clearButton = document.getElementById('clear-button');
  const sizeButton = document.getElementbyId('size-button');


  sizeButton.addEventListener("click", () => {
    let size = prompt("Enter the grid size: ");
  });

  for (let i = 0; i < size * size; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    container.appendChild(cell);
  }
});
