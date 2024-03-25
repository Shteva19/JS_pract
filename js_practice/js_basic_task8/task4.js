import Dog from "./task2.js";


class Shepherd extends Dog {

    constructor(color, name, type, breed, favoriteFood) {
        super(color, name, type, breed);
        this.favoriteFood = favoriteFood;
    }
   
    guard() {
        console.log(`${this.name} is guarding.`);
    }
}
const germanShepherd = new Shepherd("Brown", "Rex", "Dog", "German Shepherd", "Meat");
const australianShepherd = new Shepherd("Black and White", "Buddy", "Dog", "Australian Shepherd", "Fish");

console.log(germanShepherd);
console.log(australianShepherd);

germanShepherd.sayHello(); 
germanShepherd.bark();    
germanShepherd.guard();    

australianShepherd.sayHello(); 
australianShepherd.fetch();    
australianShepherd.guard(); 