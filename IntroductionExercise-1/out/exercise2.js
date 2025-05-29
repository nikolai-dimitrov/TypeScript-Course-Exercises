"use strict";
const dayOfWeek = (dayNum) => {
    let Days;
    (function (Days) {
        Days[Days["Monday"] = 1] = "Monday";
        Days[Days["Tuseday"] = 2] = "Tuseday";
        Days[Days["Wednesday"] = 3] = "Wednesday";
        Days[Days["Thrusday"] = 4] = "Thrusday";
        Days[Days["Friday"] = 5] = "Friday";
        Days[Days["Saturday"] = 6] = "Saturday";
        Days[Days["Sunday"] = 7] = "Sunday";
    })(Days || (Days = {}));
    console.log(Days[dayNum] || "error");
};
dayOfWeek(1);
dayOfWeek(5);
dayOfWeek(8);
//# sourceMappingURL=exercise2.js.map