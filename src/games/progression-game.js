import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../get-random-number';

const getProgressionMember = (startNumber, step, index) => startNumber + ((index - 1) * step);

const getRiddleData = () => {
  const startPoint = getRandomNumber(0, 20);
  const step = getRandomNumber(1, 20);
  const progressionLength = 10;
  const indexOfSkip = getRandomNumber(0, progressionLength);

  let question = '';
  let answer = 0;
  for (let i = 1; i <= progressionLength; i += 1) {
    if (i === indexOfSkip) {
      question += ' ..';
      answer = getProgressionMember(startPoint, step, i);
    } else {
      question += ` ${getProgressionMember(startPoint, step, i)}`;
    }
  }
  return cons(question, answer);
};

const game = () => {
  const description = 'What number is missing in this progression?';
  startGame(description, getRiddleData);
};

export default game;
