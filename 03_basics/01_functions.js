function SayMyName() {
  console.log("S");
  console.log("A");
  console.log("T");
  console.log("V");
  console.log("I");
  console.log("K");
}

// SayMyName()

// As we put parenthesis after a function it means we are calling it for execution without parenthesis its for reference.

/*
function addTwoNumbers(number1, number2){ //When we take input in fn then is Parameters(num1,num2)
    console.log(number1 + number2);
}

const result = addTwoNumbers(3, 4) //Here 3 & 4 are arguements(One which we call)
console.log("Result:", result);

HERE Result is undefinded 
*/

function addTwoNumbers(number1, number2) {
  //When we take input in fn then is Parameters(num1,num2)
  /*METHOD 1:  let result = number1 + number2
     return result
   */

  // Method 2:
  return number1 + number2;
  // console.log("SATVIK"); This log is not consoloing bcoz nothing works after return in function.
}

const result = addTwoNumbers(3, 4); //Here 3 & 4 are arguements(One which we call)
// console.log("Result:", result);

function userLoggedIn(username) {
  if (username === undefined) {
    console.log("Please enter a username");
  } else return `${username} just logged in.`;
}
console.log(userLoggedIn()); // If we didn't passed any value then it pass undefined

function userLoggedIn(username = "Satvik") {
  if (username === undefined) {
    console.log("Please enter a username");
  } else return `${username} just logged in.`;
}
console.log(userLoggedIn("SAM")); // it will nver get undefined as we defined it as Satvik so if no value will be assigned it with assign satvik and will overwrite if something else defined


function calculateCartPrice(val1,val2, ...num1){
	return num1
}
// console.log(calculateCartPrice(200,400,500,2000)); # Here 200,400 stored in val1,val2 and ... is rest and spread operator is used to make bundle of things.

const user = {
  username: "MOUSE",
  price: 199
}

function handleObject(anyobject){
  console.log(`Username is ${anyobject.username}and price is ${anyobject.price}`);
}
