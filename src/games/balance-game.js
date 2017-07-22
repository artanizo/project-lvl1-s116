import { cons } from 'hexlet-pairs';
import startGame from '..';
import getRandomNumber from '../get-random-number';

const getMin = arr => Math.min(...arr);

const getMax = arr => Math.max(...arr);

const isBalanced = arr => (getMax(arr) - getMin(arr)) <= 1;

const balance = (arr) => {
  const tmp = arr;
  let min = tmp.shift();
  let max = tmp.pop();
  while ((max - min) > 1) {
    max -= 1;
    min += 1;
  }
  tmp.push(min, max);
  return tmp;
};

const getBalancedNumber = (number) => {
  const calcRec = (x) => {
    const sorted = x.sort((a, b) => a - b);
    if (isBalanced(x)) {
      return sorted;
    }

    return calcRec(balance(sorted));
  };

  const result = calcRec(number.toString().split('').map(n => parseInt(n, 10)));
  return result.join('');
};

const generateData = () => {
  const number = getRandomNumber(10, 1000);
  const answer = getBalancedNumber(number);
  return cons(number, answer);
};

const game = () => {
  const description = 'Balance the given number.';
  startGame(description, generateData);
};

export default game;
