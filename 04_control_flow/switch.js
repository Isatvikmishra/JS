/* SYNTAX: 

switch (key) {
    case value:
        
        break;

    default:
        break;
}

*/
const month = "march"

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
    case "april":
        console.log("april");
        break;
    default:
        console.log("default case match");
        break;
}

// IF there will be no break then it will match all the values except default one.