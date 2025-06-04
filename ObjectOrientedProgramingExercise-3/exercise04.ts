interface Animal {
	makeSound: () => string;
}

class Dog implements Animal {
	constructor() {}
	makeSound() {
		return "Woof";
	}
}

const dog = new Dog();

console.log(dog.makeSound());
