import { writable } from 'svelte/store';

const createCount = () => {
    const { subscribe, set, update } = writable(0);
	return {
		subscribe,
		increment: () => update(n => n + 1),
		decrement: () => update(n => n - 1),
		set: (v) => set(v)
	};
}

export const count = createCount();
