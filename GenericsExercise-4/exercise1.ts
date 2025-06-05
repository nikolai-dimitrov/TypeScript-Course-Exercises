const swap = <T>(
	firstArray: T[],
	indexA: number,
	secondArray: T[],
	indexB: number
): void => {
	if (indexA > a.length || indexB > b.length) {
		return;
	}

	const firstValue = firstArray[indexA];
	const secondValue = secondArray[indexB];
	firstArray[indexA] = secondValue;
	secondArray[indexB] = firstValue;

};

let a = ["test", "123"];
let b = ["a", "b", "c"];

swap<string>(a, 0, b, 2);

console.log(a);
console.log(b);

// let a = [20, 30 , 40];
// let b = [1, 2, 3, 4, 5];

// swap<number>(a, 0, b, 2);

// console.log(a)
// console.log(b)
