import fs from 'fs';
import crates from './crates.js';

const file = fs.readFileSync('./input.txt', 'utf8');

const moves = file.split('\n');

moves.forEach((move) => {
  const [, qty, , from, , to] = move.split(' ');

  const originCrates = crates[parseInt(from) - 1];

  const moveCrates = originCrates.splice(originCrates.length - qty, qty);

  crates[parseInt(to) - 1].push(...moveCrates.reverse());
});

const resultString = crates.reduce((acc, curr) => acc + curr[curr.length - 1], '');

console.log(resultString);
