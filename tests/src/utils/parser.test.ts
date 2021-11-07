import { parser } from '../../../src/utils/parser';

describe('Check parser function', () => {
  const result = [1, '+', 2, '-', 3, '*', 4, '/', 5];

  test("1 + 2 - 3 => [1, '+', 2, '-', 3]", () => {
    expect(parser('1 + 2 - 3')).toEqual([1, '+', 2, '-', 3]);
  });
  test("3 * 4 / 5 => [3, '*', 4, '/', 5]", () => {
    expect(parser('3 * 4 / 5')).toEqual([3, '*', 4, '/', 5]);
  });
  test("1 + 2 - 3 * 4 / 5 => [1, '+', 2, '-', 3, '*', 4, '/', 5]", () => {
    expect(parser('1 + 2 - 3 * 4 / 5')).toEqual(result);
  });
  test("3 * 4 / 5 => ['3!', '*', '4!', '/', '5!']", () => {
    expect(parser('3! * 4! / 5!')).toEqual(['3!', '*', '4!', '/', '5!']);
  });
});
