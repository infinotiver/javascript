/**
 * 03_local_scope.js
 * This code snippet demonstrates the concept of local scope in JavaScript.
 * It shows how variables declared within a function can be accessed within
 * that function and its nested functions, but cannot be accessed outside of
 * those functions.
 */

/**
 * outerFunction()
 * This is the outer function that contains the inner function.
 */
function outerFunction() {
    // outerVariable is defined in the outer function and can be accessed by
    // both the outer function and its inner function.
    let outerVariable = "I am in the outer function";
  
    /**
     * innerFunction()
     * This is the inner function that is nested within the outer function.
     */
    function innerFunction() {
        // innerVariable is defined in the inner function and can only be
        // accessed within that function.
        let innerVariable = "I am in the inner function";
        console.log(innerVariable); // Output: I am in the inner function
        console.log(outerVariable); // Output: I am in the outer function
    }
  
    // Calling the inner function to demonstrate its access to variables in
    // the outer function.
    innerFunction();
    console.log(outerVariable); // Output: I am in the outer function
    
    console.log(innerVariable); // This will throw an error since innerVariable is not defined in the outer scope
}

// Calling the outer function to demonstrate its variables and inner function.
outerFunction();
