import { writable } from "svelte/store";
import { HttpService } from "./../services/http";

const http: HttpService = new HttpService();

const location = writable('dallas');
const conditions = writable(undefined);

function updateWeatherConditions(): void {
    // Get location
    location.subscribe(loc => {
        // Fetch weather conditions via HTTP
        http.getWeather(loc).then((res) => {
            conditions.update(v => v = res);
        });
    });
}

export {location, conditions, updateWeatherConditions};