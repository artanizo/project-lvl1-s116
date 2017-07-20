import getRandomNumber from '../utils';
import startGame from '../game-service';

const getCorrectAnswer = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const game = (numberOfRounds) => {
  const description = 'Answer "yes" if number even otherwise answer "no".';

  const objectives = [];

  let i = 0;
  while (i < numberOfRounds) {
    const random = getRandomNumber();

    const obj = new Map();
    obj.set('question', random);
    obj.set('correct', getCorrectAnswer(random));

    objectives.push(obj);
    i += 1;
  }

  startGame(description, objectives);
};

export default game;
