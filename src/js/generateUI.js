'use strict';

export default function generateBoard(gameBoardSize) {

  // определяем контейнер игры
  const gameContainer = document.querySelector('#game-container');
  gameContainer.innerHTML =
    `
  <div class="board-container">
    <div data-id="board" class="board"></div>
  </div>
  `;

  // определяем поле игры и разрисовываем его
  let gameBoardEl = gameContainer.querySelector('[data-id=board]');
  gameBoardEl.classList.add('prairie');
  for (let i = 0; i < gameBoardSize ** 2; i += 1) {
    const cellEl = document.createElement('div');
    cellEl.classList.add('cell', 'map-tile', 'map-tile-center');
    gameBoardEl.appendChild(cellEl);
  }
  return gameBoardEl;
}
