const arr = [12, 9, 30, 'A', 'M', 99, 82, 'J', 'N', 'B'];

const alphabet = [];
const numbers = [];

for (const elem of arr) {
  if (typeof elem === 'string') {
    alphabet.push(elem);
  } else if (typeof elem === 'number') {
    numbers.push(elem);
  }
}
alphabet.sort();
numbers.sort((a, b) => a - b);

const sortArr = [...alphabet, ...numbers];

console.log(sortArr);
