"use strict";

// Lecture : The For Loop
for (let i = 1; i <= 50; i++) console.log(`Voter number ${i} is currently voting`);

// Lecture : Looping Arrays, Breaking and Continuing
function percentageOfWorld1(population) {
  return (population * 100) / 8000;
}
const percentageOfWorld3 = (population) => (population * 100) / 8000;
const populations = [1441, 250, 400, 19];
const percentages = [];
const percentages1 = [];
for (let i = 0; i < populations.length; i++) {
  percentages.push(percentageOfWorld1(populations[i]));
}
console.log(percentages);

// Loops in Loops
const listOfNeighbours = [["Canada", "Mexico"], ["Spain"], ["Norway", "Sweden", "Russia"]];
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let j = 0; j < listOfNeighbours[i].length; j++) console.log(`Neighbour:${listOfNeighbours[i][j]}`);
}

// The While Loop
let counter = 0;
while (counter < populations.length) {
  percentages1.push(percentageOfWorld3(populations[counter]));
  counter++;
}
console.log(percentages1);
