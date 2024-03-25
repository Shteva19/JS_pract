import Animal from "./task1.js";


class Cat extends Animal {
   
    constructor(color ,name, type, age , breed, size ) {
        super(color,name,type);
        this.age = age;
        this.breed = breed;
        this.size = size;
        

    }
    bark() {
        console.log(`${this.name} says: Meow Meow!`);
    }

    purr() {
        console.log(`${this.name} is purr.`);
    }

    stomach() {
        return Math.floor(Math.random() * 10) + 1;
    }

    poop() {
        const stomachContent = this.stomach();
        if (stomachContent > 7) {
            console.log(`${this.name} needs to take a shit!`);
        } else {
            console.log(`${this.name} needs to eat some more.`);
    

        }

    }


}
const cat = new Cat("White", "MuR", "cat", 1, "mongrel", "small");
console.log(cat);
cat.bark();
cat.poop();
cat.purr();
