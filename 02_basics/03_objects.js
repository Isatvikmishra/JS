//Singleton
// Object Literals

const mysymbol = Symbol("key1");

const jsUser = {
  name: "Satvik",
  [mysymbol]: "key1", //Symbol Syntax
  email: "asksatvik",
  location: "STP",
};
// console.log(jsUser.name); //can also access, Mostly we use this
// console.log(jsUser["name"]); // but prefer this, situationly we use this
// console.log(jsUser[mysymbol]);

jsUser.email = "Satvik@gmail.com";
// Object.freeze(jsUser);
jsUser.email = "www";
// console.log(jsUser);

jsUser.greeting = function () {
  console.log("Hello Js User");
};
jsUser.greetingTwo = function () {
  console.log(`Hello Js User ${this.name}`);
};

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());


