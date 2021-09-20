// HTTP Service
// OpenWeather: https://home.openweathermap.org/api_keys

import { SECRETS } from './../../secrets';

export class HttpService {
    private baseUrl: string = 'api.openweathermap.org/data/2.5';
    private units: string = 'imperial';

    get(endpoint: string, cityName: string): Promise<Response> {
        const url: string = `http://${this.baseUrl}${endpoint}?q=${cityName}&appid=${SECRETS.openWeatherAPI}&units=${this.units}`;
        return fetch(url, { method: 'GET' }).then((r) => r.json());
    }
}
