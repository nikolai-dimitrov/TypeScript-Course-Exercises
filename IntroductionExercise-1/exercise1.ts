function checkEvenSum1(num1: number, num2: number, num3: number): boolean {
	const sum = num1 + num2 + num3;
	return sum % 2 === 0;
}

console.log(checkEvenSum1(1, 2, 3));
