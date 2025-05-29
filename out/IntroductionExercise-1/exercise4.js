"use strict";
const convertArrays = (arrWithStrings) => {
    const concatedString = arrWithStrings.join("");
    const concatedStringLen = concatedString.length;
    return [concatedString, concatedStringLen];
};
console.log(convertArrays(["How", "are", "you?"]));
console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));
//# sourceMappingURL=exercise4.js.map