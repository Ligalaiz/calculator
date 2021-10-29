import { firstPriorities, secondPriorities } from '../../../src/utils/engine';

describe('Check firstPriorities function', () => {
  test('[1 + 2 * 3] => [1 + 6]', () => {
    expect(firstPriorities([1, '+', 2, '*', 3])).toEqual([1, '+', 6]);
  });
  test('[1 / 2 * 3 + 5 - 2] => [1.5 + 5 - 2]', () => {
    expect(firstPriorities([1, '/', 2, '*', 3, '+', 5, '-', 2])).toEqual([
      1.5,
      '+',
      5,
      '-',
      2,
    ]);
  });
  test('[0.1 + 0.2 / 2 * 3] => [0.1 + 0.3]', () => {
    expect(firstPriorities([0.1, '+', 0.2, '/', 2, '*', 3])).toEqual([
      0.1,
      '+',
      0.3,
    ]);
  });
  test('[5 / 2 - 2] => [1 + 6]', () => {
    expect(firstPriorities([5, '/', 2, '-', 2])).toEqual([2.5, '-', 2]);
  });
});

describe('Check secondPriorities function', () => {
  test('[1 + 3 - 3] => 0', () => {
    expect(secondPriorities([1, '+', 3, '-', 3])).toBe(1);
  });
  test('[0.1 + 0.2 + 3] => 0', () => {
    expect(secondPriorities([0.1, '+', 0.2, '+', 3])).toBe(3.3);
  });
  test('[1 * 3 - 3] => 0', () => {
    expect(() => secondPriorities([1, '*', 3, '-', 3])).toThrow(
      TypeError('FIRST priorities sign'),
    );
  });
  test('[1 + 3 / 3] => 0', () => {
    expect(() => secondPriorities([1, '+', 3, '/', 3])).toThrow(
      'FIRST priorities sign',
    );
  });
});

describe('Check factorial condition', () => {
  test("[1 + 3! / 3] => [1, '+', 2]", () => {
    expect(firstPriorities([1, '+', '3!', '/', 3])).toEqual([1, '+', 2]);
  });
  test('[5!] => 120', () => {
    expect(firstPriorities(['5!'])).toEqual([120]);
  });
  test('[1!] => 1', () => {
    expect(firstPriorities(['1!'])).toEqual([1]);
  });
  test('[0!] => 1', () => {
    expect(firstPriorities(['0!'])).toEqual([1]);
  });
});
