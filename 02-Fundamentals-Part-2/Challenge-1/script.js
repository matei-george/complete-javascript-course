// Coding Challenge 1 - Gymnastics team average score calculator
"use strict";

const calcAverageScore = (score1, score2, score3) => (score1 + score2 + score3) / 3;

const avgDolphins = calcAverageScore(44, 23, 71);
const avgKoalas = calcAverageScore(12, 13, 14);

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins > 2 * avgKoalas) console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
  else if (avgKoalas > 2 * avgDolphins) console.log(`Koalas win ${avgKoalas} vs ${avgDolphins}`);
  else console.log(`No team wins`);
}

checkWinner(avgDolphins, avgKoalas);
