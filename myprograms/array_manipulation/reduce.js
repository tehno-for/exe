const phoneNumbers = ["(503) 123-4567", "(646) 123-4567", "(503) 987-6543", "(503) 234-5678", "(212) 123-4567", "(416) 123-4567"];
let numberOf503;

// numberOf503 should be: 3
// Write your code below

numberOf503 = phoneNumbers.reduce((acc, cur) => {
  if(cur[1] === '5') {
    return acc + 1;
  }
  return acc;
}, 0);

console.log(numberOf503);
