type LocationType = {
	city: string;
	street: string;
	number: number;
	postalCode: number;
	getAddressInfo: () => string;
};

type NamesType = {
	fName: string;
	lName: string;
	age: number;
	getPersonInfo: () => string;
};

const createCombinedFunction = (
	names: NamesType,
	location: LocationType
): Function => {
	return function (combinedObject: NamesType & LocationType): void {
        // console.log(`Hello, ${combinedObject.getPersonInfo()` from `${combinedObject.getAddressInfo()}`)
        console.log(`Hello ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`)
    };
};

let names = {
	fName: "John",
	lName: "Doe",
	age: 22,
	getPersonInfo() {
		return `${this.fName} ${this.lName}, age ${this.age}`;
	},
};

let location1 = {
	city: "Boston",
	street: "Nowhere street",
	number: 13,
	postalCode: 51225,
	getAddressInfo() {
		return `${this.street} ${this.number}, ${this.city} ${this.postalCode}`;
	},
};

let combinedFunction = createCombinedFunction(names, location1);
let combinedPerson = Object.assign({}, names, location1);

combinedFunction(combinedPerson);
