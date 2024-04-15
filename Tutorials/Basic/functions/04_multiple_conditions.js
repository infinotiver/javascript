// 04_multiple_conditions.js
/* This file shows how you can use multiple conditions in a function in same line. */

// Lengthy way


function multipleConditions(num) {
    if (num > 20) {
        if (num < 30) {
            console.log("All conditions are true");
        }
    }
} 

// Better way
function multipleConditions(num) {
    if (num > 20 && num < 30 ) { // if num > 20 and num < 30 then print "All conditions are true"
        console.log("All conditions are true")
    }
}
// for more info: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/AND_and_OR_operators
// see all the relational operators --> Tutorials\Basic\variables\04B_relational_operations.js
multipleConditions(25)