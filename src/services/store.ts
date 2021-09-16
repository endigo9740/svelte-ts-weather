// Global Data Store
import { writable } from "svelte/store";

const location = writable('dallas');
const conditions = writable(undefined);

export {location, conditions};