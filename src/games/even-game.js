import * as utils from '../utils';

const getRightAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const brainEven = (name) => {
  const round = (number) => {
    const answer = utils.askQuestion(number);
    const expectedAnswer = getRightAnswer(number);
    return utils.checkAnswer(answer.trim(), expectedAnswer, name);
  };

  console.log('Answer "yes" if number even otherwise answer "no".');

  const firstRound = round(utils.getRandomNumber());
  if (!firstRound) return;

  const secondRound = round(utils.getRandomNumber());
  if (!secondRound) return;

  const thirdRound = round(utils.getRandomNumber());
  if (!thirdRound) return;

  utils.gratsMessage(name);
};

export default brainEven;
