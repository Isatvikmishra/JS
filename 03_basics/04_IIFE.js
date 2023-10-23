//Immediately Invoked function Expression(IIFE)
//To avoid Global scope's pollution we use to iife

/***SYNTAX***/
//(Define function)(For Execution)

//Named IIFE
(function DB(name) {
  console.log(`DB Connected for ${name}`);
})("Satvik");

//Simple IIFE
((name) => {
  console.log(`Db 2 Connected ${name}`);
})("Mishra")

//When writing iife in a file makesure you add semicolon after end of 1st iife