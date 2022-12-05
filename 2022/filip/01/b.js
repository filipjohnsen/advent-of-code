import fs from 'fs';

const file = fs.readFileSync('./input.txt', 'utf8');

const elves = file.split('\n');

let mostCaloriesConsumed = [0, 0, 0];
let currentCalories = 0;

elves.forEach((elf) => {
  if (elf == '') {
    const index = mostCaloriesConsumed.findIndex(
      (item) => item < currentCalories && item === Math.min(...mostCaloriesConsumed)
    );

    if (index > -1) {
      mostCaloriesConsumed[index] = currentCalories;
    }

    currentCalories = 0;
    return;
  }

  currentCalories += parseInt(elf);
});

const result = mostCaloriesConsumed.reduce((acc, curr) => acc + curr, 0);

console.log(result);
