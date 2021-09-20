// Weather

import { location, conditions, forecast } from "./store";
import { HttpService } from "./http";

const http: HttpService = new HttpService();
let loc: string;

// Format Temperature Strings
function formatTemp(temp: number): string {
    return `${Math.round(temp)}°F`;
};

function getCurrentConditions(): void {
    // Fetch weather conditions via HTTP
    http.get('/weather', loc).then((res: any) => {
        // Format String (ex: XX°F)
        res.main.temp = formatTemp(res.main.temp);
        // Update store value
        conditions.update(v => v = res);
    });
}

function getForecast(): void {
    // Fetch forecast via HTTP
    http.get('/forecast', loc).then((res: any) => {
        // Limit results to only the temperature at noon (or midnight?)
        res.list = res.list.filter(li => li.dt_txt.includes('00:00:00'));
        // Format List Strings (ex: XX°F)
        res.list.map(t => t.main.temp = formatTemp(t.main.temp));
        // Update store value
        forecast.update(v => v = res);
    });
    console.log('getForecast() triggered');
}

function updateConditions(): void {
    // Clear to show spinner
    conditions.set(undefined);
    forecast.set(undefined);
    // Get Location Value
    location.subscribe(l => loc = l);
    // Trigger all HTTP methods
    getCurrentConditions();
    getForecast();
}

export {updateConditions};