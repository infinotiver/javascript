// 07_hasOwnProperty.js
/*
This code snippet demonstrates how to use the hasOwnProperty method
*/

var Room = {
    name: "Living Room",
    width: 10,
    height: 15,
}

console.log(Object.prototype.hasOwnProperty.call(Room, 'length')) // Output: false

Room.length = 20 // Alternatively, Room['length'] = 20 also works fine

console.log(Object.prototype.hasOwnProperty.call(Room, 'length')) // Output: true