import { safeIncrement } from './_utils';

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
});