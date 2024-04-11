let globalVariable = "I am a global variable";

function globalScopeFunction() {
  console.log(globalVariable); // Output: I am a global variable
}

globalScopeFunction();

// Changing the global variable
globalVariable = "Updated global variable";

function anotherGlobalScopeFunction() {
  console.log(globalVariable); // Output: Updated global variable
}

anotherGlobalScopeFunction();

// Local variable with the same name as global variable
function localScopeFunction() {
  let globalVariable = "I am a local variable with the same name";
  console.log(globalVariable); // Output: I am a local variable with the same name
}

localScopeFunction();

console.log(globalVariable); // Output: Updated global variable (not affected by local variable)