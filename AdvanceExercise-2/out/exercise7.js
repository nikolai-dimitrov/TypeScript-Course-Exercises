"use strict";
const isValidId = (id) => {
    return ((typeof id === "number" && id > 100) ||
        (typeof id === "string" && id.length == 14));
};
const isUsernameValid = (username) => {
    return (typeof username === "string" &&
        username.length >= 5 &&
        username.length <= 10);
};
const isHashValid = (passwordHash) => {
    return ((typeof passwordHash === "string" && passwordHash.length === 20) ||
        (Array.isArray(passwordHash) &&
            passwordHash.every((el) => typeof el === "string" && el.length === 8) &&
            passwordHash.length === 4));
};
const isStatusValid = (status) => {
    return (typeof status === "string" && ["Locked", "Unlocked"].includes(status));
};
const validateUser = (user) => {
    if (!isValidId(user.id)) {
        return false;
    }
    if (!isUsernameValid(user.username)) {
        return false;
    }
    if (!isHashValid(user.passwordHash)) {
        return false;
    }
    if (!isStatusValid) {
        return false;
    }
    return true;
};
console.log(validateUser({
    id: 120,
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
}));
console.log(validateUser({
    id: "1234-abcd-5678",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Unlocked",
}));
console.log(validateUser({
    id: "20",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
}));
console.log(validateUser({
    id: 255,
    username: "Pesho",
    passwordHash: ["asdf1245", "qrqweggw", "123-4567", "98765432"],
    status: "Locked",
    email: "something",
}));
console.log(validateUser({
    id: "qwwe-azfg-ey38",
    username: "Someone",
    passwordHash: ["qwezz8jg", "asdg-444", "12-34-56"],
    status: "Unlocked",
}));
console.log(validateUser({
    id: 1344,
    username: "wow123",
    passwordHash: "123456-123456-1234567",
    status: "Locked",
    email: "something@abv.bg",
}));
//# sourceMappingURL=exercise7.js.map