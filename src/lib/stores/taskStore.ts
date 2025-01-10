import { writable } from "svelte/store";

// Create a writable store for user data
export const taskStore = writable<{ text: string; id: number }[]>([]);
