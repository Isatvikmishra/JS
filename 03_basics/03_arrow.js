const user = {
  username: "Satvik",
  Price: 199,

  welcomeMessage: function () {
    console.log(`${this.username} ,  Welcome to Website`);
  },
};
user.username = "Sam"; // This could happened as in log we wrote using "This" whatever is in username console that
user.welcomeMessage();
//In "BROWSER" GLOBAL OBJECT IS WINDOW OBJECT #INTERIVEW

//*********ARROW**********

// function chai(){
//     let username = "Satvik"
//     console.log(this.username);
// }
// chai()

// We can declare function by removing function word and adding => after parenthesis
// const chai= () => {
//     let username = "Satvik"
//     console.log(this.username);
// }
// chai()

// MAIN SYNTAX
// () => {}

const addOne = (num1, num2) => {
  return num1 + num2;
};
console.log(addOne(3, 4));

/**OR***/

//Implicit arrow function
const addTwo = (num3, num4) => (num3 + num4) // By this we can avoid return function as we avoided curly braces
console.log(addTwo(5, 9));
