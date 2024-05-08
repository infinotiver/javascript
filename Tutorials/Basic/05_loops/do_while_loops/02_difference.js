// 02_difference.js
/* 
This code shows the difference between while loop and do... while loops in JavaScript
*/
// While loop example
let x = 10;

while (x < 5) {
  console.log('While loop - This will not be printed because the condition is false');
}

// Do...while loop example
let y = 5;

do {
  console.log('Do...while loop - This will be printed at least once, even if the condition is false');
} while (y < 5);