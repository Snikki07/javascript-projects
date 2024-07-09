// Code your crewMass function here:
function crewMass(array){
let mass = 0;
for(let i = 0; i < array.length; i++){
mass +=  array[i].mass;
}
return Math.round(10 * mass) / 10;
}

// Code your fuelRequired function here:
const rocketMass = 75000;

function getTotalMass(array){
return crewMass(array) + rocketMass;
}

function safteySurplus(array){
let surplus = 100 * array.length;
for( let i = 0; i < array. length; i++){
  if (array[i].species === "cat" || array[i].species === "dog"){
    surplus += 100;
  }
}
  return surplus;
}

function fuelRequired(array){
  return Math.round(getTotalMass(array) * 9.5 + safteySurplus(array));
}

// The pre-selected crew is in the array at the end of this file.
// Feel free to add, remove, or switch crew members as you see fit.

let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
 let crew = [candidateB,candidateD,candidateF];
 

console.log(`The mission has a launch mass of ${getTotalMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel.`)