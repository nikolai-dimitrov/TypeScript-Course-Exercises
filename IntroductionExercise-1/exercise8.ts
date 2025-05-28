// param1 is string[] 
const customTypeGuard = (param1: unknown): param1 is string[] => {
		return Array.isArray(param1) &&
		param1.length > 0 &&
		param1.every((element) => typeof element === "string")

};


let arr: unknown = ['test', '123'];

if (customTypeGuard(arr)) {
    console.log(arr.length); 
}