import * as utils from '../utils';

const getRightAnswer = (x, y) => {
  if (!y) return x;
  return getRightAnswer(y, x % y);
};

const brainGcd = (name) => {
  const round = (x, y) => {
    const answer = utils.askQuestion(`${x}  ${y}`);
    const expectedAnswer = getRightAnswer(x, y);
    return utils.checkAnswer(parseInt(answer, 10), expectedAnswer, name);
  };

  console.log('Find the greatest common divisor of given numbers.');

  const firstRound = round(utils.getRandomNumber(), utils.getRandomNumber());
  if (!firstRound) return;

  const secondRound = round(utils.getRandomNumber(), utils.getRandomNumber());
  if (!secondRound) return;

  const thirdRound = round(utils.getRandomNumber(), utils.getRandomNumber());
  if (!thirdRound) return;

  utils.gratsMessage(name);
};

export default brainGcd;
