export enum Breakpoint {
  xxs = 375,
  xs = 425,
  s = 640,
  m = 768,
  l = 1024,
  xl = 1280,
  xxl = 1440,
}

const down = (bp: number) => `@media screen and (max-width: ${bp + 1}px)`;
const up = (bp: number) => `@media screen and (min-width: ${bp}px)`;

const Up = {
	xxs: up(Breakpoint.xxs),
	xs: up(Breakpoint.xs),
	s: up(Breakpoint.s),
	m: up(Breakpoint.m),
	l: up(Breakpoint.l),
	xl: up(Breakpoint.xl),
	xxl: up(Breakpoint.xxl),
};

const Down = {
	xxs: down(Breakpoint.xxs),
	xs: down(Breakpoint.xs),
	s: down(Breakpoint.s),
	m: down(Breakpoint.m),
	l: down(Breakpoint.l),
	xl: down(Breakpoint.xl),
	xxl: down(Breakpoint.xxl),
};

export const Media = {
	up: Up,
	down: Down,
};
