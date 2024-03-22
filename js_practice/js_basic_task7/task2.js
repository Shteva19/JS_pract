
function Person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;

    this.info = function() {
        return "My name is " + this.name + ". I am " + this.age + " years old and work as a " + this.occupation + ".";
    };
}

function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.specs = function() {
        return "This is a " + this.year + " " + this.make + " " + this.model + ".";
    };
}

const person = new Person("John", 25, "developer");
const car = new Car("Toyota", "Camry", 2020);

console.log(person.info());
console.log(car.specs());