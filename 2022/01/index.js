import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const elves = file.split('\n');

let mostCaloriesConsumed = [0, 0, 0];
let currentCalories = 0;

for (let index = 0; index < elves.length; index++) {
  const element = elves[index];

  if (element == '') {
    const index = mostCaloriesConsumed.findIndex(
      (item) => item < currentCalories && item === Math.min(...mostCaloriesConsumed)
    );

    if (index > -1) {
      mostCaloriesConsumed[index] = currentCalories;
    }

    currentCalories = 0;
    continue;
  }

  currentCalories += parseInt(element);
}

const result = mostCaloriesConsumed.reduce((acc, curr) => acc + curr, 0);

console.log(result);
