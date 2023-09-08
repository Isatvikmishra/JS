//DATE

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate); // Date's output is Object

// let myBirthday = new Date(2003, 11, 16) // Month start from 0
// let myBirthday = new Date(2003, 11, 16, 05, 36)

// let myBirthday = new Date("2002-11-16")  YY-MM-DD

let myBirthday = new Date("11-16-2002"); // YY-MM-DD

console.log(myBirthday.toLocaleString());

//TIME

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(myBirthday.getTime());

// let myAge = new Number((myTimeStamp - myBirthday) / 31536000000)
//1Year = 31536000000 ms
// console.log(myAge)

console.log(Math.floor(Date.now() / 1000));

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

console.log(
  `New Day is ${newDate.getDay()} and the month is ${newDate.getMonth()}`
);

//String Interpolation
