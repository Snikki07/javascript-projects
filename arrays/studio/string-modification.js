const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let modString = str.slice(3) + str.slice(0, 3);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`The string '${str}' has now been converted to '${modString}'. `);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let userNum = input.question("How many characters should be moved? ");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let numTooLong = false;

if (userNum > str.length) {
    numTooLong = true;
    str.num = 3;
}

let usermodString = str.slice(userNum) + str.slice(0, userNum);

let result = `'${str}' string was converted to '${usermodString}'.`;

if(numTooLong){
    result += " (The number you entered is bigger than the provided strings length, so we just moved the first 3 letters.)";
}

console.log(result);