// Weather

import { location, conditions } from "./store";
import { HttpService } from "./http";

const http: HttpService = new HttpService();

// Celsius -> Fahrenheit
function celcToFarh(celcString: string): string {
    const celcNum: number = parseInt(celcString.match(/\d+/)[0]);
    return `${Math.round((celcNum * 1.8) + 32)}°`;
}

function updateConditions(): void {
    // Clear when swapping
    conditions.set(undefined);
    // Get new location
    let l: string;
    location.subscribe(loc => l = loc);
    // Fetch weather conditions via HTTP
    http.getWeather(l).then((res: any) => {
        // Format
        res.temperature = celcToFarh(res.temperature);
        res.forecast.map(fi => fi.temperature = celcToFarh(fi.temperature));
        // Update store value
        conditions.update(v => v = res);
    });
}

export {celcToFarh, updateConditions};