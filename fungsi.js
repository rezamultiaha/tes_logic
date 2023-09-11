function countAndSortLetters(param) {
  const letterCount = {};

  const cleanInput = param.replace(/\s/g, '').toLowerCase();

  for (const char of cleanInput) {
    if (/[a-z]/.test(char)) {
      letterCount[char] = (letterCount[char] || 0) + 1;
    }
  }

  const sortedResult = Object.entries(letterCount).sort((a, b) => a[0].localeCompare(b[0]));

  return sortedResult;
}

const userInput = 'Muh Reza Multiaha';
const result = countAndSortLetters(userInput);

console.log(result);
