/* eslint-disable no-prototype-builtins */
import { isNumber } from './helpers';
import { ParsedLineType, prioritiesMap } from './calculation';

export const parser = (str: string): ParsedLineType => {
  const stack = str.split(' ');
  const result = stack.reduce<ParsedLineType>((acc, cur) => {
    if (isNumber(cur)) {
      acc.push(Number(cur));
    } else if (cur.match(/^\d+!$/g)) {
      acc.push(cur);
    } else if (!isNumber(cur) && prioritiesMap.hasOwnProperty(cur)) {
      acc.push(cur);
    } else {
      throw new Error('Unexpected sign');
    }
    return acc;
  }, []);
  return result;
};
