import { test } from "@jest/globals";
import generateBoard from "../generateUI";


test('should game board', () => {
  document.body.innerHTML = '<div id="game-container"></div>';
  expect(Array.from(generateBoard(4).children).length)
    .toBe(16)
})
