
/* 
02_nested_for_loops.js
This JavaScript file demonstrates the usage of nested for loops to iterate over a 2D array and perform calculations on each element.
*/

// Example 1: Iterate over a 2D array of numbers and print their sum
const numbers = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < numbers.length; i++) {
  let sum = 0;
  for (let j = 0; j < numbers[i].length; j++) {
    sum += numbers[i][j];
  }
  console.log(`The sum of the numbers in row ${i + 1} is ${sum}`);
}
const cols = process.stdout.columns;

/* process.stdout.columns is a property in Node.js that represents the number of columns in the terminal where the script is running.*/

console.log("-".repeat(cols));
// Example 2: Iterate over a 2D array of strings and concatenate them
const words = [
  ['hello', 'world'],
  ['code', 'star'],
  ['js', 'rocks']
];

for (let i = 0; i < words.length; i++) {
  let concatenatedString = '';
  for (let j = 0; j < words[i].length; j++) {
    concatenatedString += words[i][j] + ' ';
  }
  console.log(`The concatenated string in row ${i + 1} is "${concatenatedString.trim()}"`);
}
console.log("-".repeat(cols));
