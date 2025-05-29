"use strict";
function runDiagnostics() {
    console.log(this.partName);
    return '5';
}
const carDiagnostics = (carBody, tyres, engine) => {
    console.log(carBody.runDiagnostics());
};
carDiagnostics({
    material: "aluminum",
    state: "scratched",
    partName: "Car Body",
    runDiagnostics,
}, {
    airPressure: 30,
    condition: "needs change",
    partName: "Tires",
    runDiagnostics,
}, {
    horsepower: 300,
    oilDensity: 780,
    partName: "Engine",
    runDiagnostics,
});
//# sourceMappingURL=exercise3.js.map