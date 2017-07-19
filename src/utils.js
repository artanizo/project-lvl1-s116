import readlineSync from 'readline-sync';

export const askName = () => {
    const name = readlineSync.question('May I have your name? ');
    console.log(`Hello, ${name}!`);
    return name;
};

export const askQuestion = (expr) => {
    console.log(`Question: ${expr}`);
    return readlineSync.question('Your answer: ');
};

export const checkAnswer = (playerAnswer, rightAnswer, name) => {
    if (playerAnswer === rightAnswer) {
        console.log('Correct!');
        return true;
    }

    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
};

export const getRandomNumber = () => Math.floor((Math.random() * 100) + 1);

export const gratsMessage = (name) => console.log(`Congratulations, ${name}!`);
