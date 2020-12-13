import generateGame from "../generateGoblin";
import { it, jest, test } from "@jest/globals";

test('should be setInterval', () => {
  jest.useFakeTimers();
  document.body.innerHTML = '<div id="game-container"></div>';
  generateGame();

  expect(setInterval).toHaveBeenCalledTimes(1);
  expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
})
