//10_order_of_precedence
/**
 * Order of Precedence in Operations in JavaScript
 */

// Parentheses have the highest precedence
let result1 = (5 + 3) * 2; // 16

// Next is Increment/Decrement
let x = 5;
let result2 = x++ * 2; // x is first used in the operation, then incremented: x = 6, result2 = 10

// Then comes Multiplication and Division
let result3 = 10 / 2 + 3 * 2; // 10

// Followed by Addition and Subtraction
let result4 = 15 - 4 + 2; // 13

// Comparison Operators have lower precedence than arithmetic operators
let result5 = 10 + 2 > 5 * 2; // true

// Assignment Operators have the lowest precedence
let y = 5;
let result6 = y += 3 * 2; // y = 11

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);