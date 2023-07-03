// Uncomment the code below and write your tests
import { simpleCalculator, Action } from './index';

describe('simpleCalculator tests', () => {
  test('should add two numbers', () => {
    const res = simpleCalculator({ a: 17, b: 18, action: Action.Add });
    expect(res).toBe(35);
  });

  test('should subtract two numbers', () => {
    const res = simpleCalculator({ a: 25, b: 19, action: Action.Subtract });
    expect(res).toBe(6);
  });

  test('should multiply two numbers', () => {
    const res = simpleCalculator({ a: 16, b: 2, action: Action.Multiply });
    expect(res).toBe(32);
  });

  test('should divide two numbers', () => {
    const res = simpleCalculator({ a: 12, b: 4, action: Action.Divide });
    expect(res).toBe(3);
  });

  test('should exponentiate two numbers', () => {
    const res = simpleCalculator({ a: 3, b: 3, action: Action.Exponentiate });
    expect(res).toBe(27);
  });

  test('should return null for invalid action', () => {
    const res = simpleCalculator({ a: 17, b: 18, action: '' });
    expect(res).toBeNull();
  });

  test('should return null for invalid arguments', () => {
    const res = simpleCalculator({ a: 'test', b: '', action: Action.Add });
    expect(res).toBeNull();
  });
});
