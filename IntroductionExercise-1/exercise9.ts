enum Months {
	January,
	February,
	March,
	April,
	May,
	June,
	July,
	August,
	September,
	October,
	November,
	December,
}

const friday13 = (param1: unknown[]): void => {
	for (const i in param1) {
		const currentData = param1[i];
		if (currentData instanceof Date) {
			const dayOfMonth = currentData.getDate();
			const dayOfWeek = currentData.getDay();
			const month = currentData.getMonth();
			const year = currentData.getFullYear();

			if (dayOfMonth == 13 && dayOfWeek == 5) {
				console.log(`${dayOfMonth}-${Months[month]}-${year}`);
			}
		}
	}
};

friday13([
	{},

	new Date(2025, 4, 13),

	null,

	new Date(2025, 5, 13),

	"13-09-2023",

	new Date(2025, 6, 13),
]);
