function log(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
	const originalMethod = descriptor.value;

	descriptor.value = function (firstName: string, lastName: string) {
		console.log(
			`Function '${propertyKey}' called with arguments: ${firstName}, ${lastName} `
		);
		return originalMethod.apply(this, [firstName, lastName]);
	};
}
class Person {
	fName: string;
	lName: string;

	constructor(fName: string, lName: string) {
		this.fName = fName;
		this.lName = lName;
	}
	@log
	static getFullName(firstName: string, lastName: string): string {
		return `${firstName} ${lastName}`;
	}
}

let person = new Person("John", "Does");

Person.getFullName(person.fName, person.lName);
Person.getFullName("Benny", "Tres");
