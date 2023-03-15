// Challenge-4 : Steven's tip calculator
const billValue = Number(prompt("What is the bill value?"));
const tip = billValue >= 50 && billValue <= 300 ? billValue * 0.15 : billValue * 0.2;
console.log(`The bill was ${billValue}, the tip was ${tip} with a total value of ${billValue + tip}`);
