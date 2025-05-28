enum WeekDays {
	Monday = 1,
	Tuseday,
	Wednesday,
	Thrusday,
	Friday,
	Saturday,
	Sunday,
}

type CurrentDay = keyof typeof WeekDays;
const reversedDayOfWeek = (day: CurrentDay): void => {
	console.log(WeekDays[day]);
};

reversedDayOfWeek("Monday");
