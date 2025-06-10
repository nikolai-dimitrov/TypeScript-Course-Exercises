function checkCache(
	target: any,
	propertyKey: string,
	descriptor: PropertyDescriptor
) {
	let cachedData: string[] = [];
	let lastRetrievedDataTime: Date | null = null;

	const originalAccessor = descriptor.value;

	descriptor.value = function () {
		let currentTime = new Date();
		
		if (!lastRetrievedDataTime || (currentTime.getTime() - lastRetrievedDataTime?.getTime()!) > 5000) {
			const data = originalAccessor.call(this)
			cachedData = data.slice();
			lastRetrievedDataTime = new Date();
			return data;
		} else {
			console.log("Returned from cache");
			return cachedData;
		}
	};
	return descriptor
}

class MockWeatherDataService {
	private weatherData: string[] = [
		"Sunny 8° to 20°",
		"Partially Cloudy 7° to 19°",
		"Sunny 5° to 18°",
	];

	addWeatherData(data: string) {
		this.weatherData.push(data);
	}

	@checkCache
	getWeatherData() {
		return this.weatherData;
	}
}

let service = new MockWeatherDataService();

console.log(service.getWeatherData());
console.log(service.getWeatherData());

service.addWeatherData("Partially Cloudy 5° to 11°");

console.log(service.getWeatherData());

//7 seconds later
setTimeout(() => console.log(service.getWeatherData()), 7000);
