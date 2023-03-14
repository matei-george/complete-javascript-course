// Lecture : == and ===
// const numNeighbours = Number(
//   prompt(`'How many neighbour countries does your country
// have?`)
// );
// if (numNeighbours === 1) console.log(`Only ${numNeighbours} border!`);
// else if (numNeighbours === 0) console.log(`No borders!`);

// Lecture : Logical Operators
const population = 19000000;
const preferedLanguage = `English`;
const preferedPopulation = 50000000;
const isIsland = true;

if (preferedLanguage === "Romanian" && population < preferedPopulation && !isIsland) console.log(`You should live in Romania!`);
else console.log(`Romania does not meet your criteria`);
