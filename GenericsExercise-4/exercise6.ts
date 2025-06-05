type test = {
	name: string;
	age: number;
	test: () => string;
};

type Choose<T, U extends keyof T> = {
	[Key in U]: T[Key];
};

type extracted = Choose<test, "name" | "age">;

type anotherType = {
	time: Date;
	duration: number;
	test: () => string;
	val: 200 | 300;
	user: { name: string; age: number };
};

type nestedUserAndTime = "user" | "time";
type extracted2 = Choose<anotherType, nestedUserAndTime>;

// type test3 = { name: string, age: number }
// type error = Choose<test3, 'wow'>
