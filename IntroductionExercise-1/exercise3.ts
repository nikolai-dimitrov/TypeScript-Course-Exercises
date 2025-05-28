const formatPerson = (personalInfo: [string, number]): string => {
	return `Hello, my name is ${personalInfo[0]} and my age is ${personalInfo[1]}`;
};

console.log(formatPerson(["Nikolay", 26]));
