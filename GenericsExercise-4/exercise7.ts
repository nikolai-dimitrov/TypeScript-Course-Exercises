enum TravelVacation {
	Abroad = "Abroad",
	InCountry = "InCountry",
}

enum MountainVacation {
	Ski = "Ski",
	Hiking = "Hiking",
}

enum BeachVacation {
	Pool = "Pool",
	Sea = "Sea",
	ScubaDiving = "ScubaDiving",
}

type VacationType = TravelVacation | MountainVacation | BeachVacation;

interface Holiday {
	set start(val: Date);
	set end(val: Date);
	getInfo(): string;
}

interface VacationManager<T, V> {
	reserveVacation(holiday: T, vacationType: V): void;
	listReservations(): string;
}

class PlannedHoliday implements Holiday {
	private _start!: Date;
	private _end!: Date;

	constructor(startDate: Date, endDate: Date) {
		this.start = startDate;
		this.end = endDate;
	}

	set start(val: Date) {
		this._start = val;
	}

	set end(val: Date) {
		const startDateTime = this._start.getTime();
		const endDateTime = val.getTime();
		if (startDateTime > endDateTime) {
			throw new Error("End date cannot be before start date");
		}
		this._end = val;
	}

	getInfo(): string {
		return `Holiday: ${this._start.toLocaleDateString()} - ${this._end.toLocaleDateString()}`;
	}
}

class HolidayManager<T extends Holiday, V extends VacationType>
	implements VacationManager<T, V>
{
	vacationData: Map<T, V> = new Map();

	reserveVacation(holiday: T, vacationType: V): void {
		this.vacationData.set(holiday, vacationType);
	}
	listReservations(): string {
		const formattedOutputArray = [...this.vacationData].map((el) => {
			let currentHolidayData = `${el[0].getInfo()} => ${el[1]}`;
			return currentHolidayData;
		});
		return formattedOutputArray.join("\n");
	}
}

let holiday = new PlannedHoliday(new Date(2024, 1, 1), new Date(2024, 1, 4));
let holiday2 = new PlannedHoliday(new Date(2025, 3, 14), new Date(2025, 3, 17));

let holidayManager = new HolidayManager<Holiday, TravelVacation>();

holidayManager.reserveVacation(holiday, TravelVacation.Abroad);
holidayManager.reserveVacation(holiday2, TravelVacation.InCountry);

console.log(holidayManager.listReservations());

// let holiday = new PlannedHoliday(new Date(2022, 10, 11), new Date(2022, 10, 18));
// let holiday2 = new PlannedHoliday(new Date(2024, 5, 18), new Date(2024, 5, 22));

// let holidayManager = new HolidayManager<Holiday, BeachVacation>();

// holidayManager.reserveVacation(holiday, BeachVacation.ScubaDiving);
// holidayManager.reserveVacation(holiday2, BeachVacation.Sea);

// console.log(holidayManager.listReservations())

let holiday3 = new PlannedHoliday(new Date(2021, 3, 14), new Date(2020, 3, 17));
let holiday4 = new PlannedHoliday(new Date(2024, 2, 1), new Date(2024, 1, 4));
