import { cons } from 'hexlet-pairs';
import startGame from '..';

const math = require('mathjs');

const getRandomNumber = (min, max) => math.randomInt(min, max);

const getProgression = () => {
  const startPoint = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 20);
  const progressionLength = 10;
  const indexOfSkip = getRandomNumber(0, progressionLength);

  const result = [];
  for (let i = 0; i < progressionLength; i += 1) {
    result[i] = i === 0 ? startPoint : (result[i - 1] + step);
  }
  result[indexOfSkip] = '..';
  return result.join(' ');
};

const mapFunc = (n) => {
  if (n === '..') {
    return n;
  }
  return parseInt(n, 10);
};

const findSkipNumber = (str) => {
  const arr = str.split(' ').map(mapFunc);

  const index = arr.indexOf('..');
  let step = 0;
  switch (index) {
    case 0 :
      step = arr[index + 2] - arr[index + 1];
      break;
    case (arr.length - 1) :
      step = arr[index - 1] - arr[index - 2];
      break;
    default:
      step = (arr[index + 1] - arr[index - 1]) / 2;
      break;
  }

  if (index === 0) {
    return arr[1] - step;
  }
  return arr[0] + (index * step);
};

const game = () => {
  const description = 'What number is missing in this progression?';
  startGame(description, cons(getProgression, findSkipNumber));
};

export default game;
