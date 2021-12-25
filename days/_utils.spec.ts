import { safeIncrement, doTimes, createCounter } from './_utils';

describe('_utils', () => {
  describe('safeIncrement', () => {
    test('increments a value in an accumulator', () => {
      const accumulator = { key: 1 };
      safeIncrement(accumulator, 'key');
      expect(accumulator.key).toBe(2);
    });

    test('increments a previously uninitialised value', () => {
      const accumulator: Record<string, number> = { one: 1 };
      safeIncrement(accumulator, 'two');
      expect(accumulator.two).toBe(1);
    });
  });

  describe('doTimes', () => {
    test('does a task a certain number of times', () => {
      let count = 0;
      doTimes(2, () => count += 1);
      expect(count).toBe(2);
    });
  });

  describe('createCounter', () => {
    test('creates a counter', () => {
      const counter = createCounter();
      counter.A += 1;
      expect(counter.A).toBe(1);
      expect(counter.B).toBe(0);
    });
  });
});