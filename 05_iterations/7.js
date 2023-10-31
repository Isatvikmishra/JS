const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( (num) => { return num + 10})


//Chaining
const newNums = myNumbers
                .map((num) => num * 10 ) //After applying this ot will pass value to next 
                .map( (num) => num + 1)
                .filter( (num) => num >= 40)

console.log(newNums);