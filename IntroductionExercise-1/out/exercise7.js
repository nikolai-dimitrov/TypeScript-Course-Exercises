"use strict";
const unknownResponse = (param1) => {
    console.log(param1 instanceof Object);
    if ("value" in param1 &&
        typeof param1.value === "string") {
        return param1.value;
    }
    return "-";
};
console.log(unknownResponse({ code: 200, text: "Ok", value: [1, 2, 3] }));
//# sourceMappingURL=exercise7.js.map