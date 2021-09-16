// HTTP Service

export class HttpService {
    private baseUrl: string = 'https://goweather.herokuapp.com/weather';

    getWeather(name: string): Promise<Response> {
        return fetch(`${this.baseUrl}/${name}`, { method: 'GET' }).then((r) => r.json());
    }
}
