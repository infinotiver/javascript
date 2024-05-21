// 11_challenge.js

/*

Challenge 1 : Compound Variables Calculator

Objective: Create a program that uses all types of variables (number, string, boolean) and performs compound assignment operations on them.

Instructions:

- Declare and initialize a variable of each type.
- Use compound assignment operators to modify these variables.
- Print the results after each operation.

Files to Reference: 01A_compound_assignment.js, 01_variables.js, 02_declare_intialize.js, 03_string_vars.js
*/

// Number operations
let myNum = 20;

myNum += 5; // add 5 to myNum
console.log(myNum); // Output: 25

myNum -= 3; // subtract 3 from myNum
console.log(myNum); // Output: 22

myNum *= 2; // multiply myNum by 2
console.log(myNum); // Output: 44

myNum /= 4; // divide myNum by 4
console.log(myNum); // Output: 11

myNum %= 4; // get the remainder of myNum divided by 4
console.log(myNum); // Output: 3

// String operations
let myStr = "Hello";
myStr += " World"; // concatenate myStr with " World"
console.log(myStr);

// Boolean operations
let myBool = false;

myBool &&= false; // logical AND operation
console.log("After &&= false, bool:", myBool); // Output: false

myBool ||= true; // logical OR operation
console.log("After ||= true, bool:", myBool); // Output: true


/*
Challenge 2 : Check if Number is a Palindrome

Objective: Write a program that takes a number as input and checks if it is a palindrome (a number that reads the same forwards and backwards).

Instructions:

- Write a function that takes a number as input and checks if it is a palindrome.
- Use the function to check if a number is a palindrome.
- Print the result to the console.

Files to Reference: 01A_compound_assignment.js, 01_variables.js, 02_declare_intialize.js, 03_string_vars.js
*/

function checkIfPalindrome(num) {
    let str = num.toString();
    let reversedStr = str.split("").reverse().join("");

    if (str === reversedStr) {
        return true;
    }
    else if (str !== reversedStr) {
        return false;
    }
}

console.log(checkIfPalindrome(161)); // Output: true
