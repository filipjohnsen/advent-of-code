import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const elves = file.split('\n');

let mostCaloriesConsumed = 0;
let currentCalories = 0;

for (let index = 0; index < elves.length; index++) {
  const element = elves[index];

  if (element == '') {
    if (currentCalories > mostCaloriesConsumed) {
      mostCaloriesConsumed = currentCalories;
    }

    currentCalories = 0;
    continue;
  }

  currentCalories += parseInt(element);
}

console.log(mostCaloriesConsumed);
