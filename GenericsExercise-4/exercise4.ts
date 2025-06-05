type ParamType<T> = T extends number ? number : string;

const conditionalNumber = <T>(param1: ParamType<T>): void => {
	if (typeof param1 === "number") {
		console.log(param1.toFixed(2));
	} else {
		console.log(param1);
	}
};

conditionalNumber<number>(20.3555);
conditionalNumber<string>("wow");
conditionalNumber<boolean>("a string");
