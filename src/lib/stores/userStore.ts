import { writable } from "svelte/store";

// Create a writable store for user data
export const userStore = writable<any>(null);

export const userListStore = writable<any[]>([]);