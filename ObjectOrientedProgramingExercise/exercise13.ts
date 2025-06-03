class Product {
	private static productCount: number = 1;
	readonly id: number = Product.productCount;
	_name!: string;
	_price!: number;

	constructor(name: string, price: number) {
		this.name = name;
		this.price = price;
		Product.productCount++;
	}

	get name(): string {
		return this._name;
	}

	set name(value: string) {
		if (value.length < 1) {
			throw new Error("Name should be at least 1 character!");
		}

		this._name = value;
	}

	get price(): number {
		return this._price;
	}

	set price(value: number) {
		if (value <= 0) {
			throw new Error("Price should be greater than 0!");
		}

		this._price = value;
	}

	getDetails(): string {
		return `ID: ${this.id}, Name: ${this.name}, Price: $${this.price}`;
	}
}

class Inventory {
	private products: Product[] = [];

	addProduct(product: Product): void {
		this.products.push(product);
	}

	listProducts(): string {
		const productsDetails = this.products
			.map((product) => {
				return product.getDetails();
			})
			.join("\n");
		return `${productsDetails} \nTotal products created: ${this.products.length}`;
	}
}

const inventory = new Inventory();

const product1 = new Product("Laptop", 1200);
const product2 = new Product("Phone", 800);

inventory.addProduct(product1);
inventory.addProduct(product2);

console.log(inventory.listProducts());
