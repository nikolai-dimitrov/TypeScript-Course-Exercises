function validateLength(minLength: number) {
    return function (target: any, methodName:string, descriptor:PropertyDescriptor) {
        const originalAccessor = descriptor.set;
        descriptor.set = function(value: string) {
            if(value.length < minLength) {
                throw new Error(`name must have min length of ${minLength} characters`);
            }
            return originalAccessor?.call(this, value);
        }
    };
};

function validateAge(minAge: number, maxAge: number){
    return function (target: any, methodName: string, descriptor: PropertyDescriptor){
        const originalAccessor = descriptor.set;

        descriptor.set = function(value: number) {
            if(value < minAge || value > maxAge) {
                throw new Error(`age must be between ${minAge} and ${maxAge}`);
            }

            return originalAccessor?.call(this, value);
        }
        
    }
}

function validatePassword(regex:RegExp) {
    return function (target: any, methodName: string, descriptor: PropertyDescriptor){
        const originalAccessor = descriptor.set;

        descriptor.set = function(value:string) {
            if(!value.match(regex)) {
                throw new Error(`password needs to match ${regex}`);
            }

            return originalAccessor?.call(this, value);
        }
        
    }
}

class User {
	private _name!: string;

	private _age!: number;

	private _password!: string;

	constructor(name: string, age: number, password: string) {
		this.name = name;

		this.age = age;

		this.password = password;
	}

    @validateLength(1)
	set name(val: string) {
		this._name = val;
	}

   @validateAge(1, 150)
	set age(val: number) {
		this._age = val;
	}
    
    @validatePassword(/^[a-zA-Z0-9!@]+$/g)
	set password(val: string) {
		this._password = val;
	}

	get name() {
		return this._name;
	}

	get age() {
		return this._age;
	}
}

// minLength = 1
// min = 1, max = 150
// regex = /^[a-zA-Z0-9!@]+$/g

let user = new User('John', 130, 'hardPassword12');

// let user2 = new User('John', 30, '!test');

// let user3 = new User('John', 25, '@werty');

// let user4 = new User('Jo', 20, 'password123');

// ------------------------------------------------

// minLength = 3

// min = 1, max = 100

// regex = /^[a-zA-Z0-9]+$/g

// let user = new User('John', 130, 'hardPassword12');

// let user2 = new User('John', 30, '!test');

// let user3 = new User('John', 25, '@werty');

// let user4 = new User('Jo', 20, 'password123');