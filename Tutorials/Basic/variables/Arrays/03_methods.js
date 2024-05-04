// 03_methods.js
// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// 1. forEach() method
console.log("forEach() method:");
numbers.forEach((number) => {
  console.log(number);
});

// 2. map() method
console.log("\nmap() method:");
const squaredNumbers = numbers.map((number) => {
  return number * number;
});
console.log("Squared Numbers:", squaredNumbers);

// 3. filter() method
console.log("\nfilter() method:");
const evenNumbers = numbers.filter((number) => {
  return number % 2 === 0;
});
console.log("Even Numbers:", evenNumbers);

// 4. find() method
console.log("\nfind() method:");
const foundNumber = numbers.find((number) => {
  return number > 3;
});
console.log("First Number > 3:", foundNumber);

// 5. includes() method
console.log("\nincludes() method:");
const includesThree = numbers.includes(3);
console.log("Includes 3:", includesThree);

// 6. some() method
console.log("\nsome() method:");
const hasNegativeNumber = numbers.some((number) => {
  return number < 0;
});
console.log("Has Negative Number:", hasNegativeNumber);

// 7. every() method
console.log("\nevery() method:");
const allPositiveNumbers = numbers.every((number) => {
  return number > 0;
});
console.log("All Positive Numbers:", allPositiveNumbers);

// 8. reduce() method
console.log("\nreduce() method:");
const sum = numbers.reduce((total, number) => {
  return total + number;
}, 0);
console.log("Sum of Numbers:", sum);