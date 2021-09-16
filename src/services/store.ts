import { writable } from "svelte/store";
import { HttpService } from "./../services/http";

const http: HttpService = new HttpService();

const location = writable('dallas');
const conditions = writable(undefined);

function updateWeatherConditions(): void {
    let l: string;
    location.subscribe(loc => l = loc);
    // Fetch weather conditions via HTTP
    http.getWeather(l).then((res) => {
        conditions.update(v => v = res);
    });
    
}

export {location, conditions, updateWeatherConditions};