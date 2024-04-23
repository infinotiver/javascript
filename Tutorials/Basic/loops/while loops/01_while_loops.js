// 01_while_loops.js
/*
This code snippet shows the usage of while loops in JavaScript.
The while loop loops (what ?) until the specified condition is met
*/

// Syntax
/*
while (condition) {
    code
}
*/

// Initialize a variable to keep track of the number of days
let days = 1;

// Start the while loop
while (days <= 5) {
  console.log(`Day ${days}: Work hard, have fun!`); // Print the message for each day
  days++; // Increment the number of days
}

let count = 0;

while (count < 10) // JS has 0 based indexing i.e indexing starts from 0 so 10 would end at 9 only
{
    console.log(`Current count is ${count}`);
    count ++; // Increment operator
}