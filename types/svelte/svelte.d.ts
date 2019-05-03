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
