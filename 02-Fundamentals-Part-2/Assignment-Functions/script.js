"use strict";

// Lecture : Functions
function describeCountry(country, population, capitalCity) {
  return `${country} has ${population} milion people and its capital city is ${capitalCity}`;
}

const romania = describeCountry("Romania", 19, "Bucharest");
const finland = describeCountry("Finland", 6, "Helsinki");
const usa = describeCountry("USA", 350, "Washington");

console.log(`${romania}\n${finland}\n${usa}`);

// Lecture : Function declaration vs expression
function percentageOfWorld1(population) {
  return Math.round((population / 8000) * 100 * 100) / 100;
}
const china = percentageOfWorld1(1441);
const russia = percentageOfWorld1(140);
const brazil = percentageOfWorld1(215);
console.log(china, russia, brazil);

const country = function percentageOfWorld2(population) {
  return Math.round((population / 8000) * 100 * 100) / 100;
};
console.log(country(1441), country(140), country(215));

// Lecture : Arrow Functions

const country2 = (population) => Math.round((population / 8000) * 100 * 100) / 100;
console.log(country2(1441), country2(140), country2(215));

// Lecture : Functions calling other functions
function describePopulation(country, population) {
  const percentage = percentageOfWorld1(population);
  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
}

const china2 = describePopulation("China", 1441);
const russia2 = describePopulation("Russia", 140);
const brazil2 = describePopulation("Brazil", 250);
console.log(`${china2}\n${russia2}\n${brazil2}`);
