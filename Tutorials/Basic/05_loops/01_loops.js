// 01_loops.js
/* 
This code snippet shows usage of loops in javascript
This file is just an example and detailed information can be found in the sub directories

Loops in programming are used to execute a block of code repeatedly until a specific condition is met. They are essential for automating repetitive tasks, iterating through data structures like arrays and objects, and performing calculations or operations multiple times.
*/
// Looping with a for loop

// Basic for loop example
for (let i = 0; i < 5; i++) {
  console.log(i); // Print the current value of i
}

// Looping through an array using a for loop
const fruits = ['apple', 'banana', 'orange', 'grape'];

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]); // Print each fruit in the array
}

// Looping through an object using a for...in loop
const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

for (let key in person) {
  console.log(`${key}: ${person[key]}`); // Print key-value pairs of the object
}

// Looping with a while loop
let count = 0;

while (count < 5) {
  console.log(count); // Print the current value of count
  count++; // Increment count to avoid infinite loop
}

// Looping with a do...while loop
let j = 0;

do {
  console.log(j); // Print the current value of j
  j++; // Increment j even if the condition is false for do...while
} while (j < 5);