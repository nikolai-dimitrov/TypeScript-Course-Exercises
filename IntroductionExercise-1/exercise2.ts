const dayOfWeek = (dayNum: number): void => {
	enum Days {
		Monday = 1,
		Tuseday,
		Wednesday,
		Thrusday,
		Friday,
		Saturday,
		Sunday,
	}
	
	console.log(Days[dayNum] || "error");
};

dayOfWeek(1);
dayOfWeek(5);
dayOfWeek(8);
