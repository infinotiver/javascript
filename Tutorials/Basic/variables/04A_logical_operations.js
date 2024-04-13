// 04A_logical_operations.js
/*
This file demonstrates the use of logical operators.
*/

// Logical Operators
let isTrue = true;
let isFalse = false;
let logicalAnd = isTrue && isFalse; // logical AND
let logicalOr = isTrue || isFalse; // logical OR
let logicalNot = !isTrue; // logical NOT

// Examples

// Variable declarations
let userHasPassword = true; // User has a password
let userIsAdmin = false; // User is not an admin

// Logging the values of variables to the console
console.log("User has password:", userHasPassword); // Output: User has password: true
console.log("User is an admin:", userIsAdmin); // Output: User is an admin: false

// Using logical AND (&&) operator. 
// Result will be true if both conditions are true, and false otherwise.
let userCanAccessAdminPanel = userHasPassword && userIsAdmin; // User can access admin panel
console.log("User can access admin panel:", userCanAccessAdminPanel); // Output: User can access admin panel: false

// Using logical OR (||) operator.
// Result will be true if at least one condition is true, and false otherwise.
let userCanAccessPublicPanel = userHasPassword || !userIsAdmin; // User can access public panel
console.log("User can access public panel:", userCanAccessPublicPanel); // Output: User can access public panel: true

// Using logical NOT (!) operator.
let userIsNotAdmin = !userIsAdmin; // User is not an admin
console.log("User is not an admin:", userIsNotAdmin); // Output: User is not an admin: true

// More examples
let isCurrentlyRaining = true; // It is currently raining
console.log("It is currently raining:", isCurrentlyRaining); // Output: It is currently raining: true
let userHasUmbrella = false; // User does not have an umbrella
console.log("User has an umbrella:", userHasUmbrella); // Output: User has an umbrella: false

// Using logical AND (&&) operator.
// Result will be false since one of the conditions is false.
let shouldUserBringUmbrella = isCurrentlyRaining && userHasUmbrella; // User should bring an umbrella
console.log("(AND operator) User should bring an umbrella:", shouldUserBringUmbrella); // Output: User should bring an umbrella: false

// Using logical OR (||) operator.
// Result will be true since one of the conditions is true.
shouldUserBringUmbrella = isCurrentlyRaining || userHasUmbrella; // User should bring an umbrella
console.log("(OR operator) User should bring an umbrella:", shouldUserBringUmbrella); // Output: User should bring an umbrella: true

console.log("------------------------------")


