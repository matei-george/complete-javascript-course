// Lecture : The switch Statement
const language = prompt("What language do you speak?");
switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("4rd place");
    break;
  case "arabic":
    console.log("5rd place");
    break;
  default:
    console.log("Great language too 😁");
    break;
}

// Lecture : The ternary operator
const countryName = "Romania";
const populationCount = Number(prompt(`What's the population count?`));
const isGreaterThan =
  populationCount > 13000000
    ? console.log(`${countryName}'s population is above average`)
    : console.log(`${countryName}'s population is below average`);
