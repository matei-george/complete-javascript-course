const scoreD1 = 97,
  scoreD2 = 112,
  scoreD3 = 101;
const scoreK1 = 109,
  scoreK2 = 95,
  scoreK3 = 106;
const averageScoreD = Math.round(((scoreD1 + scoreD2 + scoreD3) / 3) * 10) / 10;
const averageScoreK = Math.round(((scoreK1 + scoreK2 + scoreK3) / 3) * 10) / 10;
console.log(`${averageScoreD}, ${averageScoreK}`);
if (averageScoreD > 100 && averageScoreK > 100) {
  if (averageScoreD > averageScoreK) console.log(`Team Dolphins wins with an average of ${averageScoreD}`);
  else if (averageScoreD < averageScoreK) console.log(`Team Koalas wins with an average of ${averageScoreK}`);
  else if (averageScoreD === averageScoreK) console.log(`Teams are draw.`);
} else console.log(`No team has won the trophy, due to not reaching minimum score.`);
