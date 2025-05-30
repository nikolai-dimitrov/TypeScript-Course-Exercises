"use strict";
const validateUser = (user) => {
    const isIdValid = ("id" in user && typeof user.id === "number" && user.id > 100) ||
        ("id" in user && typeof user.id === "string" && user.id.length == 14);
    const isUsernameValid = "username" in user &&
        typeof user.username === "string" &&
        user.username.length >= 5 &&
        user.username.length <= 10;
    const isHashValid = ("passwordHash" in user &&
        typeof user.passwordHash === "string" &&
        user.passwordHash.length === 20) ||
        (Array.isArray(user.passwordHash) &&
            user.passwordHash.every((el) => typeof el === "string" && el.length === 8) &&
            user.passwordHash.length === 4);
    const isStatusValid = "status" in user && ["Locked", "Unlocked"].includes(user.status);
    const isUserValid = isIdValid && isUsernameValid && isHashValid && isStatusValid;
    return isUserValid;
};
validateUser({
    id: 120,
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
});
validateUser({
    id: "1234-abcd-5678",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Unlocked",
});
validateUser({
    id: "20",
    username: "testing",
    passwordHash: "123456-123456-123456",
    status: "Deleted",
    email: "something",
});
validateUser({
    id: 255,
    username: "Pesho",
    passwordHash: ["asdf1245", "qrqweggw", "123-4567", "98765432"],
    status: "Locked",
    email: "something",
});
validateUser({
    id: "qwwe-azfg-ey38",
    username: "Someone",
    passwordHash: ["qwezz8jg", "asdg-444", "12-34-56"],
    status: "Unlocked",
});
validateUser({
    id: 1344,
    username: "wow123",
    passwordHash: "123456-123456-1234567",
    status: "Locked",
    email: "something@abv.bg",
});
//# sourceMappingURL=exercise7.js.map