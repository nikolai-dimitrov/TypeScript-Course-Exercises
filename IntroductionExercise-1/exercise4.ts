const convertArrays = (arrWithStrings: string[]): [string, number] => {
	const concatedString = arrWithStrings.join("");
	const concatedStringLen = concatedString.length;
	return [concatedString, concatedStringLen];
};

console.log(convertArrays(["How", "are", "you?"]));
console.log(convertArrays(['Today', ' is', ' a ', 'nice', ' ', 'day for ', 'TypeScript']));

