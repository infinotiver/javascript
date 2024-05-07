// 01A_compound_assignment.js
// Compound Assignment
// Declare four variables named a, b, c, and d and assign them the values 15, 1, 9, and 6, respectively
let a = 15;
let b = 1;
let c = 9;
let d = 6;
let e = 13;
/**
 * Recommended way to perform compound assignment
 * Add 5 to the value of a
 */
a += 5;
console.log(a);
/**
 * Subtract the value of b from 10 and assign the result to b
 */
b -= 10;
console.log(b);
/**
 * Multiply the value of c by 5 and assign the result to c
 */
c *= 5;
console.log(c);
/**
 * Divide the value of d by 2 and assign the result to d
 */
d /= 2;
console.log(d);
e %= d;
console.log(e);
