class User {
	private _username!: string;

	constructor(username: string) {
		this.username = username;
	}

	get username(): string {
		return this._username;
	}

	set username(newUsername: string) {
		if (newUsername.length < 3) {
			throw new Error("Username should be at least 3 characters!");
		}
        
		this._username = newUsername;
	}
}

const user = new User("Martin");
user.username = "johnDoe";

console.log(user.username)

// const user = new User("jo");
// console.log(user.username)

// const user = new User("Martin");
// user.username = "Do";
