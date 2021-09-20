// HTTP Service
// OpenWeather: https://home.openweathermap.org/api_keys

export class HttpService {
    private baseUrl: string = 'api.openweathermap.org/data/2.5';
    private apiKey: string = 'ae16ffe6d0c251d75cafc95e21283fe5';
    private units: string = 'imperial';

    get(endpoint: string, cityName: string): Promise<Response> {
        const url: string = `http://${this.baseUrl}${endpoint}?q=${cityName}&appid=${this.apiKey}&units=${this.units}`;
        return fetch(url, { method: 'GET' }).then((r) => r.json());
    }
}
