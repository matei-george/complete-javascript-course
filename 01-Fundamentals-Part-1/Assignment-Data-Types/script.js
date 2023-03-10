// Lecture : Data Types and let,const, var
const country = "Romania";
let population = 130000000;
const continent = "Europe";
const isIsland = false;
const language = "romanian";
console.log(isIsland, population, country, language);

// Lecture : Basic Operators
let halfPopulation = population / 2;
console.log("The population split by half would be", halfPopulation);
halfPopulation++;
console.log(halfPopulation);
const finlandPopulation = 6000000;
console.log(population > finlandPopulation);
const avgPopulation = 33000000;
console.log(population > avgPopulation);

// Lecture : Strings and Template Literals
const description = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description);

// Lecture : If-Else
if (population > avgPopulation) console.log(`${country}'s population is greater than average`);
else console.log(`${country}'s population is ${avgPopulation - population} below average`);
