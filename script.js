//complete this code
class Animal {
	constructor (species){
		this.species = species;
	}
	get species(){
		return this.species;
	}
	makeSound(){
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

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
