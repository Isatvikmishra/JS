// Data Types are of Two Types:

/*
# PRIMITIVE: String, Number, Boolean, null, undefined,Symbol,BIGint
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);


#Since value of id & anotherID is same but still it will be different as they are in Symbol thats what it is used for.


const bigNumber = 3456543576654356754n
*/


// #Reference(Non Primitive): Arrays, objects, Function

const heros = ["babuaman", "makadimanush"]; //arrays

let myObj = {
    Name: "Satvik",
    Age: 20,
}
// Objects are declared in curly braces

const myFunction = function(){
    console.log("Hello World");
}

console.log(myFunction);
