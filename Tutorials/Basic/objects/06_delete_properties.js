// 06_delete_properties.js
/* 
This code snippet demonstrates how to delete properties from an object using dot and bracket notation
*/

let person = {
    name: "John Doe",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Anytown"
    },
    hobbies: ["Reading", "Coding"]
}

// Delete property using dot notation
delete person.age;

// Delete property using bracket notation
delete person['address'];

console.log(person);
