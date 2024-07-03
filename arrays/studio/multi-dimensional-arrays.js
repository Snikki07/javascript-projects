const input = require('readline-sync');


let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.

let foodArr = food.split(",").sort();
let equipmentArr = equipment.split(",").sort();
let petsArr = pets.split(",").sort();
let sleepAidsArr = sleepAids.split(",").sort();

//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.

let cargoHold = [];
cargoHold.push(foodArr, equipmentArr,  petsArr, sleepAidsArr);
console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.

let userNum = input.question(`Please choose a cabinet number (0-3):
    0 - Food
    1 - Equipment
    2 - Pets
    3 - Sleep Aids
    `);

    let selectedCabinet;

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.

if (userNum < 0 || userNum > 3){
    console.log("Invalid choice! Please pick a cabinet 0 - 3: ")
}else{
    selectedCabinet = cargoHold[userNum];
    console.log(selectedCabinet);
let selectedItem = input.question("Which item from your selected cabned do you want?");//5)starts here

let containsText = "DOES ";
if (!selectedCabinet.includes(selectedItem)){
    containsText += "NOT";
}
console.log(`The cabinet ${containsText} contain your selected item: ${selectedItem}`);
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
