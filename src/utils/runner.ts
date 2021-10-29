import parser from './parser';
import { firstPriorities, secondPriorities } from './engine';

const runner = (str: string): number => {
  const stack = parser(str);

  if (stack === null) {
    throw new TypeError('Unexpected string');
  }

  const firstPrioritiesRes = firstPriorities(stack);

  if (firstPrioritiesRes.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPriorities(firstPrioritiesRes);
};

module.exports = runner;
