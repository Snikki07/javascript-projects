//Try adding new properties inside constructor.
class Astronaut {
   constructor(name, age, mass){
     this.name = name;
     this.age = age;
     this.mass = mass;
   }
}

let fox = new Astronaut('Fox', 7, 12);

console.log(fox);
console.log(fox.age, fox.color);

fox.age = 9;
fox.color = 'red';

console.log(fox);
console.log(fox.age, fox.color);

//Try modifying or adding properties below.
fox.age +=1;
fox.cutnessLvl = 1000;

console.log(fox.age);
console.log(fox.cutnessLvl);

let cat = new Astronaut ('Cat', 5, 8);
console.log(cat);