// 01_scopes.js

// Global scope example
let globalVariable = "I am a global variable";

function globalScopeFunction() {
  console.log(globalVariable); // Output: I am a global variable
}

globalScopeFunction();

// Local scope example
function localScopeFunction() {
  let localVariable = "I am a local variable";
  console.log(localVariable); // Output: I am a local variable
}

localScopeFunction();

console.log(localVariable); // This will throw an error since localVariable is not defined in the global scope

// Differences between global and local scope
// - Global scope variables are accessible from anywhere in the code
// - Local scope variables are only accessible within the block of code they are defined in
// - When a local variable has the same name as a global variable, the local variable takes precedence within its scope