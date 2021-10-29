import {
  sum,
  subtract,
  multiply,
  divide,
  exp,
} from '../../../src/utils/calculation';

describe('Check sum function', () => {
  test('23 + 69.5 = 92.5', () => {
    expect(sum(23, 69.5)).toBe(92.5);
  });
  test('0.1 + 0.2 = 0.3', () => {
    expect(sum(0.1, 0.2)).toBe(0.3);
  });
  test('-3 + -2 = -5', () => {
    expect(sum(-3, -2)).toBe(-5);
  });
  test('0.0004 + 0.0004 = 0.0008', () => {
    expect(sum(0.0004, 0.0004)).toBe(0.0008);
  });
  test('-0.15 + -0.15 = -0.3', () => {
    expect(sum(-0.15, -0.15)).toBe(-0.3);
  });
});

describe('Check subtract function', () => {
  test('44 - 2 = 42', () => {
    expect(subtract(44, 2)).toBe(42);
  });
  test('-0.1 - 0.2 = -0.3', () => {
    expect(subtract(-0.1, 0.2)).toBe(-0.3);
  });
  test('0.4 - 0.1 = 0.3', () => {
    expect(subtract(0.4, 0.1)).toBe(0.3);
  });
  test('-2 - -7 = 5', () => {
    expect(subtract(-2, -7)).toBe(5);
  });
});

describe('Check multiply function', () => {
  test('2 * 3 = 6', () => {
    expect(multiply(2, 3)).toBe(6);
  });
  test('-5 * 3 = -15', () => {
    expect(multiply(-5, 3)).toBe(-15);
  });
  test('0.2 * 0.4 = 0.08', () => {
    expect(multiply(0.2, 0.4)).toBe(0.08);
  });
  test('74 * 3 = 222', () => {
    expect(multiply(74, 3)).toBe(222);
  });
});

describe('Check divide function', () => {
  test('-9 / -3 = 3', () => {
    expect(divide(-9, -3)).toBe(3);
  });
  test('2 / -2 = -1', () => {
    expect(divide(2, -2)).toBe(-1);
  });
  test('0.4 / 0.2 = 2', () => {
    expect(divide(0.4, 0.2)).toBe(2);
  });
  test('7 / 3 = 2.33', () => {
    expect(divide(7, 3)).toBe(2.33);
  });
  test('0.5 / 0.3 = 1.67', () => {
    expect(divide(0.5, 0.3)).toBe(1.67);
  });
});

describe('Check exp function', () => {
  test('2 ** 2 => 4', () => {
    expect(exp(2, 2)).toBe(4);
  });
  test('0.2 ** 0.2 => 0.72', () => {
    expect(exp(0.2, 0.2)).toBe(0.72);
  });
  test('2 ** 2 => 4', () => {
    expect(exp(-3, 2)).toBe(9);
  });
});
