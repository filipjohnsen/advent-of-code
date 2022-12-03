import fs from 'fs';
import alphabet from './alphabet.js';

const file = fs.readFileSync('./input.txt', 'utf8');

const rucksacks = file.split('\n');

const findBadgeScore = (group) => {
  let badgeLetter;
  for (const letter of alphabet) {
    const f1 = group[0].includes(letter);
    const f2 = group[1].includes(letter);
    const f3 = group[2].includes(letter);

    if (f1 && f2 && f3) {
      badgeLetter = letter;
      break;
    }
  }

  return alphabet.indexOf(badgeLetter) + 1;
};

const rucksackGroups = rucksacks.reduce((acc, curr, idx) => {
  if (idx % 3 === 0) {
    acc.push([]);
  }

  acc[acc.length - 1].push(curr);

  return acc;
}, []);

const result = rucksackGroups.reduce((acc, curr) => {
  const score = findBadgeScore(curr);
  return acc + score;
}, 0);

console.log(result);
