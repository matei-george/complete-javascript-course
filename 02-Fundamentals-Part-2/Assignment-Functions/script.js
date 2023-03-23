"use strict";

// Lecture : Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion people, and its capital city is ${capitalCity}.`;
}
const finland = describeCountry("Finland", 6, "Helsinki");
const romania = describeCountry("Romania", 19, "Bucharest");
const germany = describeCountry("Germany", 80, "Berlin");

console.log(`${finland}
${romania}
${germany}`);

// Lecture : Declarations vs expressions
function percentageOfWorld1(population) {
  return Math.round((population / 8000) * 100 * 10) / 10;
}
const usa = percentageOfWorld1(350);
const canada = percentageOfWorld1(38);
const russia = percentageOfWorld1(145);

console.log(`${usa}, ${canada}, ${russia}`);

const calcPercentage = function percentageOfWorld2(population) {
  return Math.round((population / 8000) * 100 * 10) / 10;
};

const usa2 = calcPercentage(350);
const canada2 = calcPercentage(38);
const russia2 = calcPercentage(145);

console.log(`${usa2}, ${canada2}, ${russia2}`);

// Lecture : Arrow Functions

const percentageOfWorld3 = (population) => {
  return Math.round((population / 8000) * 100 * 10) / 10;
};
const romania2 = percentageOfWorld3(19);
console.log(romania2);
