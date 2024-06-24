let num = 1001;

//Returns 'undefined'.

//Use type conversion to print the length (number of digits) of an integer.
let numAsString = String(1001);
console.log("The number 1001 becomes " + numAsString + " now as data type: \n\t" + typeof numAsString + "\n");
console.log("\t"+ numAsString.length);
//console.log(num, "has", num.length, "didgets.");
console.log("\n", numAsString, "has", numAsString.length, "didgets.");
//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

if (String(num).includes('.')) {
    console.log("\n\t",String(num).length - 1);
} else {
    console.log("\n\t", String(num).length);
}
