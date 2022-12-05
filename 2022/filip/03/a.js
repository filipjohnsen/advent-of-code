import fs from 'fs';
import alphabet from './alphabet.js';

const file = fs.readFileSync('./input.txt', 'utf8');

const rucksacks = file.split('\n');

const result = rucksacks.reduce((acc, items) => {
  const numberOfItems = curr.length / 2;
  const right = items.slice(0, numberOfItems).split('');
  const left = items.slice(numberOfItems).split('');

  const removeDuplicateItems = new Set(...right.filter((item) => left.includes(item)));

  const sum = [...removeDuplicateItems].reduce((acc, curr) => {
    return acc + alphabet.indexOf(curr) + 1;
  }, 0);

  return acc + sum;
}, 0);

console.log(result);
