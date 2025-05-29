"use strict";
const optionalMultiplier = (param1, param2, param3) => {
    // if (typeof param1 == )
    const num1 = typeof param1 === "undefined" ? 1 : Number(param1);
    const num2 = typeof param2 === "undefined" ? 1 : Number(param2);
    const num3 = typeof param3 === "undefined" ? 1 : Number(param3);
    return num1 * num2 * num3;
};
console.log(optionalMultiplier("3", 5, "10"));
console.log(optionalMultiplier("2", "2"));
console.log(optionalMultiplier(undefined, 2, 3));
console.log(optionalMultiplier(7, undefined, "2"));
console.log(optionalMultiplier());
//# sourceMappingURL=exercise1.js.map