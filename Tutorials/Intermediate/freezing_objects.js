// freezing_objects.js

// "use strict"; directive is necessary to use Object.freeze()
"use strict";

// Let's create a simple object
const myObject = { 
    dob: 1990 // My D.O.B 
}

// But we can change it
myObject.dob = 2000 // Changed my D.O.B

// Object.freeze(obj) makes the object and its properties 
// read-only. It cannot be changed, added, or deleted.
// Any attempt to do so will result in an error.

// However, Object.freeze() only works in "use strict"; mode.
// Without it, the code will execute without any errors

// Let's try to change the object and see what happens
Object.freeze(myObject) // Object cannot be extended

try {
    myObject.dob = 2200 // Error: Cannot assign to read-only property 'dob' 
} catch (error) {
    console.log(error) // TypeError: Cannot assign to read-only property 'dob' 
    // Note: This error will not be caught in non-strict mode
}

