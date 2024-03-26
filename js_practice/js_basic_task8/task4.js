import Dog from "./task2.js";

class Shepherd extends Dog {

    constructor(color, name, type, age, breed, size, favoriteFood) {
        super(color, name, type, age, breed, size);
        this.favoriteFood = favoriteFood;
    }
   
    guard() {
        console.log(`${this.name} is guarding.`);
    }
}
const germanShepherd = new Shepherd("Brown", "Rex", "Dog",1,  "German Shepherd", 200, "Meat");
const australianShepherd = new Shepherd("Black and White", "Buddy", "Dog", 7,"Australian Shepherd",150, "Fish");

console.log(germanShepherd);
console.log(australianShepherd);

germanShepherd.sayHello(); 
germanShepherd.bark();    
germanShepherd.guard();    

australianShepherd.sayHello(); 
australianShepherd.fetch();    
australianShepherd.guard(); 