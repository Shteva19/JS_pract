 import Animal from "./task1.js";


 export default  class Dog  extends Animal {
   
    constructor(color ,name, type, age , breed, size ) {
        super(color,name,type);
        this.age = age;
        this.breed = breed;
        this.size = size;
        

    }
    bark() {
        console.log(`${this.name} says: Woof woof!`);
    }

    fetch() {
        console.log(`${this.name} is fetching.`);
    }


}
const dog = new Dog("black", "Cheini", "dog", 2, "Bulldog", "medium");
console.log(dog);
dog.bark();
dog.fetch();

