"use strict";
// Lecture : Introduction to Arrays
function percentageOfWorld(population) {
  return Math.round((population / 8000) * 100 * 10) / 10;
}
const populations = [1441, 250, 150, 100];
populations.length === 4 ? console.log(`True`) : console.log(`False`);
const percentages = [];
for (let i = 0; i < populations.length; i++) percentages[i] = percentageOfWorld(populations[i]);
console.log(`Percentages of the world are : ${percentages}`);
