export const sum = (a: number, b: number): number => {
  return (a * 100 + b * 100) / 100;
};
export const subtract = (a: number, b: number): number => {
  return Number(((a * 100 - b * 100) / 100).toFixed(2));
};
export const multiply = (a: number, b: number): number => {
  return (a * 100 * b * 100) / 10000;
};
export const divide = (a: number, b: number): number => {
  return Number((a / b).toFixed(2));
};

export const exp = (a: number, b: number): number => {
  return Number((a ** b).toFixed(2));
};

interface ISign {
  [key: string]: (a: number, b: number) => number;
}

interface IPriorities {
  [key: string]: number;
}

export const signMap: ISign = {
  '+': sum,
  '-': subtract,
  '/': divide,
  '*': multiply,
  '**': exp,
};

export const [FIRST, SECOND] = [1, 2];

export const prioritiesMap: IPriorities = {
  '+': SECOND,
  '-': SECOND,
  '/': FIRST,
  '*': FIRST,
  '**': FIRST,
};

export type ParsedLineType = (number | string)[];
