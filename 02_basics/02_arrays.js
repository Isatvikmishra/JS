const marvel_heroes = ["Spiderman", "Ironman"];
const dc_heroes = ["Superman", "flash"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);
// console.log(marvel_heroes[2][1]);

// const allHeros = marvel_heroes.concat(dc_heroes)
// console.log(allHeros);

// concat does not change in existing array it returns a new array.

const allNewHeros = [...marvel_heroes, ...dc_heroes]; // USING SPREAD OPERATOR
// console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, 8, [4, 5, [7, 8]]];
const real_anotherArray = anotherArray.flat(Infinity);
console.log(real_anotherArray);

console.log(Array.isArray("Satvik"));
console.log(Array.from("Satvik"));
console.log(Array.from({ name: "Satvik" })); // interesting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
