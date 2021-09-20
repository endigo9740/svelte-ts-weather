// Global Data Store
import { writable } from "svelte/store"; // Writable

// interface Forecast {
//     day: number;
//     temperature: string;
//     wind: string;
// }

// interface Conditions {
//     temperature: string;
//     wind: string;
//     description: string;
//     forecast: Forecast[]
// }

const location = writable('dallas'); // : Writable<string>
const conditions = writable(undefined); // : Writable<Conditions>
const forecast = writable(undefined); // : Writable<Conditions>

export {location, conditions, forecast};