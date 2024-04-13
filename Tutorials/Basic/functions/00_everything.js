// 00_everything.js

/*
This JavaScript file demonstrates various types of functions in JavaScript, including regular, function expression, arrow function, and named function expressions.

Function Types:
- Regular Function: This is a function declared using the "function" keyword.
- Function Expression: This is a function created using the "function" keyword, but assigned to a variable.
- Arrow Function: This is a concise way to write function expressions. It does not have a "function" keyword.
- Named Function Expression: This is a function expression with a name. It is useful when debugging or for recursion.
- Generator Function: This is a special type of function that can be paused and resumed at will.
- Immediately Invoked Function Expression (IIFE): This is a function that runs as soon as it is defined.

Function Usage:
- Calling Functions: Invoke the functions using their names or variables.
- Returning Values: Use the "return" keyword to return a value from a function.
- Recursion: Use a function to call itself. This is useful for tasks that can be broken down into smaller parts.
*/

// Regular Function
function regularFunction() {
    console.log("Regular Function");
}

// Function Expression
const functionExpression = function() {
    console.log("Function Expression");
};

// Arrow Function
const arrowFunction = () => {
    console.log("Arrow Function");
};

// Regular Function Type
function regularFunctionType() {
    console.log("Regular Function Type");
}

// Function Expression Type
const functionExpressionType = function() {
    console.log("Function Expression Type");
};

// Arrow Function Type
const arrowFunctionType = () => {
    console.log("Arrow Function Type");
};

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("IIFE Function Type");
})();

// Generator Function
function* generatorFunctionType() {
    yield 1;
    yield 2;
    yield 3;
}

// Named Function Expression
const namedFunctionExpression = function namedFunc() {
    console.log("Named Function Expression Type");
};

// Recursive Function
function countdown(num) {
    if (num > 0) {
        console.log(num);
        countdown(num - 1);
    }
}

regularFunction();
functionExpression();
arrowFunction();
regularFunctionType();
functionExpressionType();
arrowFunctionType();
countdown(5);

