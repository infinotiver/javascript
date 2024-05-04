// 02B_manipulation.js
/**
 * This code demonstrates how to manipulate arrays in JavaScript.
 */

// Renaming variables for clarity and readability
const personInfo = ["My Info", 15, "Name"];
const computerInfo = ["Computers", "Binary", 0, 0];
const nestedArray = [personInfo, computerInfo];

// Modifying the nested array element at index 1 and setting it to 1
nestedArray[1][3] = 1;

console.log(nestedArray);

/**
 * Manipulate Arrays using push()
 * Adding elements to the end of the array
 */
const rocksArray = ['Rocks', 'R', 15];
rocksArray.push(["Stone", "S", 5]);

console.log(rocksArray);

/**
 * Manipulate Arrays using pop()
 * Removing the last element of the array and returning it
 */
const lettersArray = ["A", "B", "C"];
const removedElement = lettersArray.pop();
console.log(lettersArray, removedElement);

/**
 * Manipulate Arrays using shift()
 * Removing the first element of the array and returning it
 */
const animalsArray = ["A", "B", "C"];
const removedAnimal = animalsArray.shift();
console.log(animalsArray, removedAnimal);

// Usage of unshift() to add elements to the start of an array
const fruitsArray = ["apple", "banana"];

fruitsArray.unshift("kiwi", "grape");

console.log(fruitsArray);


