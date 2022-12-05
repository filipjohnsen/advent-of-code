import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const crates = [
  ['G', 'J', 'W', 'R', 'F', 'T', 'Z'],
  ['M', 'W', 'G'],
  ['G', 'H', 'N', 'J'],
  ['W', 'N', 'C', 'R', 'J'],
  ['M', 'V', 'Q', 'G', 'B', 'S', 'F', 'W'],
  ['C', 'W', 'V', 'D', 'T', 'R', 'S'],
  ['V', 'G', 'Z', 'D', 'C', 'N', 'B', 'H'],
  ['C', 'G', 'M', 'N', 'J', 'S'],
  ['L', 'D', 'J', 'C', 'W', 'N', 'P', 'G'],
];

const cratesReverse = crates.map((crate) => crate.reverse());

const moves = file.split('\n');

moves.forEach((move) => {
  const [m, number, f, origin, t, destination] = move.split(' ');

  const originCrates = cratesReverse[parseInt(origin) - 1];

  const moveCrates = originCrates.splice(originCrates.length - number, number);

  cratesReverse[parseInt(destination) - 1].push(...moveCrates);
});

const resultString = cratesReverse.reduce((acc, curr) => {
  return acc + curr[curr.length - 1];
}, '');

console.log(resultString);
