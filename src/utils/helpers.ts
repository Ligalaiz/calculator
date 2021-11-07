export const isNumber = (x: number | string): boolean =>
  !Number.isNaN(Number(x));
