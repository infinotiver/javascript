// 03_methods.js
// Creating an array of numbers
const numbers = [1, 2, 3, 4, 5];

// 1. forEach() method
console.log("forEach() method:");
numbers.forEach(forEachCallback);

// Function for forEach method
function forEachCallback(number) {
  // This function logs each number in the array
  console.log(number);
}


// 2. map() method
console.log("\nmap() method:");
const squaredNumbers = numbers.map(mapCallback);
console.log("Squared Numbers:", squaredNumbers);

// Function for map method
function mapCallback(number) {
  // This function squares each number in the array and returns the squared number
  return number * number;
}


// 3. filter() method
console.log("\nfilter() method:");
const evenNumbers = numbers.filter(filterCallback);
console.log("Even Numbers:", evenNumbers);

// Function for filter method
function filterCallback(number) {
  // This function checks if each number in the array is even and returns true if it is, false otherwise
  return number % 2 === 0;
}


// 4. find() method
console.log("\nfind() method:");
const foundNumber = numbers.find(findCallback);
console.log("First Number > 3:", foundNumber);

// Function for find method
function findCallback(number) {
  // This function checks if each number in the array is greater than 3 and returns true if it is, false otherwise
  return number > 3;
}


// 5. includes() method
console.log("\nincludes() method:");
const includesThree = numbers.includes(3);
console.log("Includes 3:", includesThree);


// 6. some() method
console.log("\nsome() method:");
const hasNegativeNumber = numbers.some(someCallback);
console.log("Has Negative Number:", hasNegativeNumber);

// Function for some method
function someCallback(number) {
  // This function checks if each number in the array is less than 0 and returns true if it is, false otherwise
  return number < 0;
}


// 7. every() method
console.log("\nevery() method:");
const allPositiveNumbers = numbers.every(everyCallback);
console.log("All Positive Numbers:", allPositiveNumbers);

// Function for every method
function everyCallback(number) {
  // This function checks if each number in the array is greater than 0 and returns true if it is, false otherwise
  return number > 0;
}


// 8. reduce() method
console.log("\nreduce() method:");
const sum = numbers.reduce(reduceCallback, 0);
console.log("Sum of Numbers:", sum);

// Function for reduce method
function reduceCallback(total, number) {
  // This function adds each number in the array to the total and returns the sum
  return total + number;
}

