"use strict";
// param1 is string[] 
const customTypeGuard = (param1) => {
    return Array.isArray(param1) &&
        param1.length > 0 &&
        param1.every((element) => typeof element === "string");
};
let arr = ['test', '123'];
if (customTypeGuard(arr)) {
    console.log(arr.length);
}
//# sourceMappingURL=exercise8.js.map