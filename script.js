class Animal {
    constructor(species) {
        this._species = species; // Use a private field to store the species
    }

    // Getter for species
    get species() {
        return this._species;
    }

    // Method to log the sound an animal makes
    makeSound() {
        console.log(`The ${this.species} makes a sound`);
    }
}

class Dog extends Animal {
    constructor(species) {
        super(species); // Call the parent class constructor
    }

    // Method specific to Dog
    bark() {
        console.log("woof");
    }
}

class Cat extends Animal {
    constructor(species) {
        super(species); // Call the parent class constructor
    }

    // Method specific to Cat
    purr() {
        console.log("purr");
    }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound(); // Output: The Siamese makes a sound
myCat.purr(); // Output: purr

const myDog = new Dog("Golden Retriever");
myDog.makeSound(); // Output: The Golden Retriever makes a sound
myDog.bark(); // Output: woof

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
