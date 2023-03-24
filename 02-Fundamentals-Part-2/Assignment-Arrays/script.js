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

// Lecture : Array Methods
const countryNeighbours = ["Ucraina", "Moldova", "Ungaria", "Serbia", "Bulgaria"];
console.log(countryNeighbours);
countryNeighbours.push("Utopia");
console.log(countryNeighbours);
countryNeighbours.pop();
console.log(countryNeighbours);
if (!countryNeighbours.includes("Germany")) console.log("Probably not a central European country 😁");
countryNeighbours[countryNeighbours.indexOf("Moldova")] = "Republica Moldova";
console.log(countryNeighbours);
countryNeighbours[countryNeighbours.indexOf("Bulgaria")] = `Romania's brother from another mother`;
console.log(countryNeighbours);
