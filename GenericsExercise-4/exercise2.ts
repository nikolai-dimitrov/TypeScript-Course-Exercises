interface CountableSet<T> {
	add(item: T): void;
	remove(item: T): void;
	contains(item: T): boolean;
	getNumberOfCopies(item: T): number;
}

class CountedSet<T> implements CountableSet<T> {
	private items: Map<T, number> = new Map();
	add = (item: T) => {
		let currentItemCount = this.items.get(item);
		if (currentItemCount) {
			this.items.set(item, currentItemCount + 1);
		} else {
			this.items.set(item, 1);
		}
	};

	remove = (item: T) => {
		let currentItemCount = this.items.get(item);
		if (!currentItemCount || currentItemCount === 0) {
			return;
		} else {
			this.items.set(item, currentItemCount - 1);
		}
	};

	contains = (item: T) => {
		let currentItemCount = this.items.get(item);
		if (currentItemCount && currentItemCount > 0) {
			return true;
		}
		return false;
	};

	getNumberOfCopies = (item: T) => {
		let currentItemCount = this.items.get(item);
		if (currentItemCount && currentItemCount > 0) {
			return currentItemCount;
		} else {
			return 0;
		}
	};
}

let countedSet = new CountedSet<string>();

countedSet.add("test");
countedSet.add("test");

console.log(countedSet.contains("test"));
console.log(countedSet.getNumberOfCopies("test"));

countedSet.remove("test");
countedSet.remove("test");
countedSet.remove("test");

console.log(countedSet.getNumberOfCopies("test"));
console.log(countedSet.contains("test"));


// let codesCounterSet = new CountedSet<200 | 301 | 404 | 500>();

// codesCounterSet.add(404);

// codesCounterSet.add(200);

// console.log(codesCounterSet.contains(404));

// console.log(codesCounterSet.getNumberOfCopies(200));


// codesCounterSet.add(205); //TS Error

// codesCounterSet.getNumberOfCopies(350); //TS Error