// Type definitions for svelte 3.1
// Project: https://github.com/sveltejs/svelte#README
// Definitions by: Jungle <https://github.com/pyoner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "*.svelte" {
  interface Component {
    new (options: any): any;
  }
  const component: Component;
  export default component;
}

declare module "svelte" {
  export function afterUpdate(fn: () => void): void;

  export function beforeUpdate(fn: () => void): void;

  export function onDestroy(fn: () => void): void;

  export function onMount(fn: () => void): void;
  export function onMount(fn: () => () => void): void;

  export function setContext<K, C>(key: K, context: C): void;
  export function getContext<K, C>(key: K): C;

  export function tick(): Promise<void>;

  export function createEventDispatcher<D>(): (type: string, detail: D) => void;
}

declare module "svelte/store" {
  /// <reference path="./store.d.ts" />
}

declare module "svelte/motion" {
  /// <reference path="./motion.d.ts" />
}

declare module "svelte/transition" {
  /// <reference path="./transition.d.ts" />
}

declare module "svelte/animate" {
  /// <reference path="./animate.d.ts" />
}

declare module "svelte/easing" {
  /// <reference path="./easing.d.ts" />
}
