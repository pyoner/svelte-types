export interface BaseOptions {
  delay: number;
  duration: number;
}

// fade
export interface FadeOptions extends BaseOptions {}

export interface Fade extends BaseOptions {
  css(t: number): string;
}

export function fade(node: Node, opts: Partial<FadeOptions>): Fade;

// fly
export interface FlyOptions extends BaseOptions {
  x: number;
  y: number;
  opacity: number;
  easing(value: number): number;
}

export interface Fly extends BaseOptions {
  easing(value: number): number;
  css(t: number, u: number): string;
}

export function fly(node: Node, opts: Partial<FlyOptions>): Fly;

// slide
export interface SlideOptions extends BaseOptions {
  easing(value: number): number;
}

export interface Slide extends SlideOptions {
  css(t: number): string;
}

export function slide(node: Node, opts: Partial<SlideOptions>): Slide;

// scale
export interface ScaleOptions extends BaseOptions {
  easing(value: number): number;
  start: number;
  opacity: number;
}

export interface Scale extends BaseOptions {
  easing(value: number): number;
  css(t: number, u: number): string;
}

export function scale(node: Node, opts: Partial<ScaleOptions>): Scale;

// draw
export interface DrawOptions extends BaseOptions {
  speed: number;
  easing(value: number): number;
}

export interface Draw extends BaseOptions {
  easing(value: number): number;
  css(t: number, u: number): string;
}

export function draw(node: Node, opts: Partial<DrawOptions>): Draw;

// crossfade
export type DurationFn = (n: number) => number;

export interface CrossfadeParams {
  delay: number;
  duration: number | DurationFn;
  easing(value: number): number;
}

export interface CrossfadeOptions {
  fallback(node: Node, params: Partial<CrossfadeParams>, intro: boolean): void;
  duration: number | DurationFn;
  delay: number;
}

export interface Crossfade extends BaseOptions {
  easing(value: number): number;
  css(t: number, u: number): string;
}

export type CrossfadeFn = (
  node: Node,
  params: Partial<CrossfadeParams>
) => () => Crossfade;

export function crossfade(
  opts: Partial<CrossfadeOptions>
): [CrossfadeFn, CrossfadeFn];
