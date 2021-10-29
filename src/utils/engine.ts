import { isNumber } from './helpers';
import {
  FIRST,
  SECOND,
  ParsedLineType,
  prioritiesMap,
  signMap,
  factorial,
} from './calculation';

export const firstPriorities = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((acc, secondParam) => {
    if (typeof secondParam === 'string' && secondParam.match(/^\d+!$/g)) {
      secondParam = factorial(parseFloat(secondParam));
    }

    const firstParam = acc[acc.length - 2];
    const currentSign = acc[acc.length - 1];

    if (
      isNumber(firstParam) &&
      !isNumber(currentSign) &&
      prioritiesMap[currentSign] === FIRST
    ) {
      const result = signMap[currentSign](
        Number(firstParam),
        Number(secondParam),
      );
      acc = [...acc.slice(0, -2), result];
    } else {
      acc.push(secondParam);
    }
    return acc;
  }, []);

export const secondPriorities = (stack: ParsedLineType): number =>
  stack.reduce<number>((acc, cur, ind) => {
    const currentSign = stack[ind - 1];

    if (prioritiesMap[currentSign] === FIRST) {
      throw new TypeError('FIRST priorities sign');
    }

    if (!isNumber(currentSign) && prioritiesMap[currentSign] === SECOND) {
      acc = signMap[currentSign](Number(acc), Number(cur));
    }
    return acc;
  }, Number(stack[0]));
