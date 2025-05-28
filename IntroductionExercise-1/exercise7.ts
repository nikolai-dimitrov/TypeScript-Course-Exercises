const unknownResponse = (param1: unknown): string => {
	console.log(param1 instanceof Object);
	if (
		"value" in (param1 as any) &&
		typeof (param1 as any).value === "string"
	) {
		return (param1 as any).value;
	}

	return "-";
};

console.log(unknownResponse({ code: 200, text: "Ok", value: [1, 2, 3] }));
