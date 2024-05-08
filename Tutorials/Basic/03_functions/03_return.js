// 03_return.js
/*
This code snippet show you how you can return (give back) some values from a function for further use
*/

function FullName(FirstName, LastName) {
    var fullName = FirstName + " " + LastName;
    return fullName
}

var myFirstName = "Robert"
var myLastName  =  "Frost"
var myFullName  =  FullName(myFirstName, myLastName)
console.log("My Full name is " + myFullName)