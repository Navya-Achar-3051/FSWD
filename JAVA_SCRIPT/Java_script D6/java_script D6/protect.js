"use strict"
// Create Object
const person = {firstName:"John", lastName:"Doe"};

// Prevent Extensions
Object.preventExtensions(person)

// Test Error
let text = "";
try {
  person.nationality = "English";
}
catch (err) {
  text = err;
}

console.log(text);