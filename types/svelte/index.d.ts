// Type definitions for svelte 3.1
// Project: https://github.com/sveltejs/svelte#README
// Definitions by: Jungle <https://github.com/pyoner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export function afterUpdate(fn: () => void): void;

export function beforeUpdate(fn: () => void): void;

export function onDestroy(fn: () => void): void;

export function onMount(fn: () => void): void;
export function onMount(fn: () => () => void): void;

export function setContext<K, C>(key: K, context: C): void;
export function getContext<K, C>(key: K): C;

export function tick(): Promise<void>;

export function createEventDispatcher<D>(): (type: string, detail: D) => void;
