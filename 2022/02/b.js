console.time('time');
import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const rounds = file.split('\n');

const plays = ['A', 'B', 'C'];

const calculateScore = (play) => {
  const score = plays.indexOf(play) + 1;

  return score;
};

const result = rounds.reduce((total, currentRound) => {
  const [opponent, me] = currentRound.split(' ');

  // loose
  if (me === 'X') {
    const index = plays.indexOf(opponent);
    const play = plays[index - 1] ?? plays[plays.length - 1];

    return total + calculateScore(play) + 0;
  }

  // win
  if (me === 'Z') {
    const index = plays.indexOf(opponent);
    const play = plays[index + 1] ?? plays[0];

    return total + calculateScore(play) + 6;
  }

  // draw
  const play = opponent;

  return total + calculateScore(play) + 3;
}, 0);

console.log(result);
console.timeEnd('time');
