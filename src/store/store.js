import { writable } from "svelte/store";

export const activeFilters = writable(new Set());