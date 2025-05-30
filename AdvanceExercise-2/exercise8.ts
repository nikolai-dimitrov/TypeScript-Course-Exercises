// Because of files conflict is named UserType instead of User
type UserType = {
	username: string;
	signupDate: Date;
};

type TaskStatus = "Logged" | "Started" | "InProgress" | "Done";

type Task = {
	status: TaskStatus;
	title: string;
	daysRequired: number;
	assignedTo: UserType | undefined;
	changeStatus(newStatus: TaskStatus): void;
};
function assignTask(user: UserType, task: Task) {
	if (task.assignedTo == undefined) {
		task.assignedTo = user;

		console.log(`User ${user.username} assigned to task '${task.title}'`);
	}
}

let user = {
	username: "Margaret",

	signupDate: new Date(2022, 1, 13),

	passwordHash: "random",
};

let task1 = {
	status: <"Logged" | "Started" | "InProgress" | "Done"> "InProgress",

	title: "Need assistance",
	daysRequired: 1,
	assignedTo: undefined,

	changeStatus(newStatus: TaskStatus) {
		this.status = newStatus;
	},
};

let task2 = {
	status: <"Logged" | "Started" | "InProgress" | "Done">"Done",
	title: "Test",
	daysRequired: 12,
	assignedTo: undefined,

	changeStatus(newStatus: TaskStatus) {
		this.status = newStatus;
	},
	moreProps: 300,
	evenMore: "wow",
};

assignTask(user, task1);
assignTask(user, task2);
