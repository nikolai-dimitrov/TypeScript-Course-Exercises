"use strict";
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
const createCombinedFunction = (names, location) => {
    return function (combinedObject) {
        console.log(`Hello ${combinedObject.getPersonInfo()} from ${combinedObject.getAddressInfo()}`);
    };
};
let combinedFunction = createCombinedFunction(names, location1);
let combinedPerson = Object.assign({}, names, location1);
combinedFunction(combinedPerson);
//# sourceMappingURL=exercise6.js.map