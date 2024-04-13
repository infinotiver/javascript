// 04C_conditional_operations.js
// Conditional (or ternary) Operators
/**
 * This file demonstrates the use of conditional or ternary operators.
 * 
 * Conditional or ternary operators are a shorthand for if-else statements and are denoted by the ? : syntax.
 * They consist of three parts: a condition, a value if the condition is true, and a value if the condition is false.
 * The condition is evaluated and if it is true, the first value is returned, otherwise the second value is returned.
 * Syntax:
 *           variable = (condition) ? TRUE_value: FALSE_value
 */
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No"; // ternary operator
console.log(canVote)