// Utilities (NOTE: typically these would be their own service)

import { location, conditions } from "./../services/store";
import { HttpService } from "./../services/http";

const http: HttpService = new HttpService();

// Convert Celsius -> Fahrenheit String
function celcToFarh(celcString: string): string {
    const celcNum: number = parseInt(celcString.match(/\d+/)[0]);
    return `${Math.round((celcNum * 1.8) + 32)}°`;
}

// Update weather conditions on demand (updates global store)
function updateWeatherConditions(): void {
    let l: string;
    location.subscribe(loc => l = loc);
    // Fetch weather conditions via HTTP
    http.getWeather(l).then((res: any) => {
        // Format
        res.temperature = celcToFarh(res.temperature);
        res.forecast.map(fi => fi.temperature = celcToFarh(fi.temperature));

console.log(res);

        // Update store value
        conditions.update(v => v = res);
    });
}

export {celcToFarh, updateWeatherConditions};