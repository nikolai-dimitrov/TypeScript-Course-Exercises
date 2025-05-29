function runDiagnostics(this: any) {
	console.log(this.partName)
    return '5'
}
type CarBody = {
	material: string;
	state: string;
};

type Tyres = {
	airPressure: number;
	condition: string;
};

type Engine = {
	horsepower: number;
	oilDensity: number;
};

type Diagnostics = {
	partName: string;
	runDiagnostics: () => string;
};

const carDiagnostics = (
	carBody: CarBody & Diagnostics,
	tyres: Tyres & Diagnostics,
	engine: Engine & Diagnostics
) => {
	console.log(carBody.runDiagnostics());
};

carDiagnostics(
	{
		material: "aluminum",
		state: "scratched",
		partName: "Car Body",
		runDiagnostics,
	},

	{
		airPressure: 30,
		condition: "needs change",
		partName: "Tires",
		runDiagnostics,
	},

	{
		horsepower: 300,
		oilDensity: 780,
		partName: "Engine",
		runDiagnostics,
	}
);
