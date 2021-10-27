/* eslint-disable no-prototype-builtins */
import { prioritiesMap, ParsedLineType } from './calculation';
import { isNumber } from './helpers';

const parser = (str: string): ParsedLineType => {
  const stack = str.split(' ');
  const result = stack.reduce<ParsedLineType>((acc, cur) => {
    if (isNumber(cur)) {
      acc.push(Number(cur));
    } else if (!isNumber(cur) && prioritiesMap.hasOwnProperty(cur)) {
      acc.push(cur);
    } else {
      throw new Error('Unexpected sign');
    }
    return acc;
  }, []);
  return result;
};

export default parser;
