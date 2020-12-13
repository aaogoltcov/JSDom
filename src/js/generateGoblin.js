'use strict';

import generateBoard from "./generateUI";

// задаем размер поля
const gameBoardSize = 4;

// объявляем переменную, которая поможет передвигать гоблина в новые ячейки
let previousCellElement = Number();

// определям функцию генерации случайных целочисленных чисел
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min);
}

// объявляем функцию с помозью которой определяем следующую позицию гоблина на игровом поле
function getNextCellElPosition(previousCellElement) {
  let result = false;
  let nextCellElement = Number();
  while (result === false) {
    nextCellElement = getRandomNumber(0, gameBoardSize ** 2 - 1);
    if (nextCellElement !== previousCellElement) { result = true }
  }
  return nextCellElement;
}

// определяем основную функцию, которая вызывает прорисовку игрового поля и движение гоблина
export default function generateGame() {
  let gameBoardEl = generateBoard(gameBoardSize);
  let gameBoardCells = Array.from(gameBoardEl.children);
  let interval = Number();

  setInterval(() => {
    for (const cell of gameBoardCells) {
      cell.innerHTML = '';
    }
    let nextCellElPosition = getNextCellElPosition(previousCellElement);
    const cellEl = gameBoardEl.children[nextCellElPosition];
    const charEl = document.createElement('div');
    charEl.classList.add('character', 'Goblin');
    cellEl.appendChild(charEl);
    previousCellElement = nextCellElPosition;
    return interval;
  }, 1000)
}
