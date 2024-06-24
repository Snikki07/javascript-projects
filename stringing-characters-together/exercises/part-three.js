//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
console.log( language.slice(0,1) + language.slice(4,5) );
//2. Without using slice(), use method chaining to accomplish the same thing.

let initials = language.replace("Java", "J").replace("Script","S");
console.log(initials);
//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log(`The abbrviation for '${language}' is '${initials}'.`);
//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let funString = "  HEY!  if you are happy and you know it\n\t       clap your hands       ";
let moreFunString = funString.toUpperCase().trim().slice(4,71);
console.log(funString.length);
console.log(moreFunString);
//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'
let notTitleCase = 'title case';
console.log(notTitleCase.toUpperCase());