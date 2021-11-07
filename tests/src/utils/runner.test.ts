import { runner } from '../../../src/utils/runner';

describe('Check runner function', () => {
  test('2 + 3 * 4 / 5 - 1 => 3.4', () => {
    expect(runner('2 + 3 * 4 / 5 - 1')).toBe(3.4);
  });
  test('2 + 3 - 4 + 5 - 1 => 3.4', () => {
    expect(runner('2 + 3 - 4 + 5 - 1')).toBe(5);
  });
  test('2 + 3 * 4 / 5 - 1 => 3.4', () => {
    expect(runner('7 - 3 - 4 - 5 - 1')).toBe(-6);
  });
});
