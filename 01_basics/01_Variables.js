const accountID = 14553;
let accountEmail = "ask@gmail.com";
var accountPassword = "12345";
accountCity = "Sitapur"; //We can do so but its not preferred

// accountID=2 Not allowed
// We cant change Const variable

accountEmail = "char@gmail.com";
accountPassword = "4567";
/*
Preferred not to use Var because of scope problem in block scope and functional block
*/

console.log(accountID);
console.table([accountEmail, accountID, accountPassword]);
