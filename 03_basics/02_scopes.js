var c = 50
let z = 80
let a= 300

console.log(a);
if (true) {
    let a = 10
    console.log("Inner: ", a);

    const b = 20
    var c = 30
    console.log(z); //value of Global scope is available inside the block scope.
}

// console.log(a); 
// ReferenceError: a is not defined. As let is inside block scope and value of block scope is not available for global scope. 

// console.log(b);
// ReferenceError: b is not defined. As const is inside block scope and value of block scope is not available for Global

console.log(c); //Here we get the value of c as this is problem of var even if we decalare another var with variable c it will still fetch value 30. So we avoid var.





//// NESTED FUNCTION 

function one() {
    const username = "Satvik"

    function two(){
        const website = "Git"
        console.log(username);
    }
    // console.log(website); As we are accessing it outside the block scope.
    two() // This got executed as we accessed global scope username in block scope.
}
one()


///INTERESTING///

console.log(addOne(5));
function addOne(num){
    return num + 1
}
// Using this we can access before initialization

// console.log(addTwo(2));
const addTwo = function(num){
    return num + 2
}

// We can access Using this before initialization
