"use strict";
var Months;
(function (Months) {
    Months[Months["January"] = 0] = "January";
    Months[Months["February"] = 1] = "February";
    Months[Months["March"] = 2] = "March";
    Months[Months["April"] = 3] = "April";
    Months[Months["May"] = 4] = "May";
    Months[Months["June"] = 5] = "June";
    Months[Months["July"] = 6] = "July";
    Months[Months["August"] = 7] = "August";
    Months[Months["September"] = 8] = "September";
    Months[Months["October"] = 9] = "October";
    Months[Months["November"] = 10] = "November";
    Months[Months["December"] = 11] = "December";
})(Months || (Months = {}));
const friday13 = (param1) => {
    for (const i in param1) {
        const currentData = param1[i];
        if (currentData instanceof Date) {
            const dayOfMonth = currentData.getDate();
            const dayOfWeek = currentData.getDay();
            const month = currentData.getMonth();
            const year = currentData.getFullYear();
            if (dayOfMonth == 13 && dayOfWeek == 5) {
                console.log(`${dayOfMonth}-${Months[month]}-${year}`);
            }
        }
    }
};
friday13([
    {},
    new Date(2025, 4, 13),
    null,
    new Date(2025, 5, 13),
    "13-09-2023",
    new Date(2025, 6, 13),
]);
//# sourceMappingURL=exercise9.js.map