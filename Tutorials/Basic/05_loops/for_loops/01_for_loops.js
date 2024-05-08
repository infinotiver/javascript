// 01_for_loops.js
/*
This code snippet shows the usage of for loops in JavaScript.
The For loop is used to run a piece of code  specified times
For Loops iterates through a block of code until the counter reaches a specified number
For loop consists of 3 statements ()
For loop is most used loop in JavaScript
*/


/* 
Basic Syntax

    for (statement 1; statement 2; statement 3) {
    // Code to be executed
    } 
*/


/*
    for(initialization; condition; final expression) {
    // Code to be executed
    } 
*/

for (var i = 0; i < 20; i++) {
    console.log(i)
}

// Finding odd numbers 

let oddNumberArray1 = []

for (var i = 0; i < 20; i++) {
    if (i % 2 != 0) {
        oddNumberArray1.push(i)
    }
}
console.log(oddNumberArray1)

// Alternate  way

let oddNumberArray2 = []
for (var i = 1; i < 20; i += 2) {
    oddNumberArray2.push(i)
}
console.log(oddNumberArray2)

// Finding even numbers

let evenNumberArray = []

for (var x = 0; x < 20; x += 2) {
    evenNumberArray.push(x)
}
console.log(evenNumberArray)

// Counting backwards 

let backwardCounting = []

for (var x = 20; x > 0; x--){
    backwardCounting.push(x)
}
console.log(backwardCounting)