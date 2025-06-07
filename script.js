document.addEventListener("DOMContentLoaded", (event) => {
  const container = document.getElementsByClassName('grid-container')[0];
  
  for (let i = 0; i < 16 * 16; i++) {
    const cell = document.createElement('div');
    cell.classList.add('grid-cell');
    container.appendChild(cell);
  }
});
