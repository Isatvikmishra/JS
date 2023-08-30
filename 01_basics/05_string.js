const Name = "Satvik"
const Age = 19

// console.log( Name + Age + "Value"); NOT RECOMMENDED 

console.log(`My name is ${Name.toUpperCase()} and my age is ${Age}`);
// This is recommended



const gameName = new String('SatvikIM')  // also declare string like this.

console.log(gameName[0]);

console.log(gameName.charAt(4));
console.log(gameName.indexOf('k'));

// To read more prototypes go developer too and write any of the above and you can see many proto's.


const NewString = gameName.substring(0,4)
console.log(NewString);

const anotherString = gameName.slice(-7,3)
console.log(anotherString);

const newStringOne = "    Satvik   "
console.log(newStringOne);
console.log(newStringOne.trim());

// Sometimes user insert blank spaces while filling forms so we dont want to store that into our servers so we use .trim prototype to remove blank spaces.


const url = "https://technologyandtricks.com/about%20us"
// browser automatically convert blank spaces into unicode %20
console.log(url.replace('%20','-'));



const aboutUs = new String ('Hi myself Satvik and i am learning js.')
console.log(aboutUs.split(' ')); // separated with spaces & it will create an array.

console.log(aboutUs.includes('Satvik')); // tells whether available or not.



