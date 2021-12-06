import { solvePart1 } from './day6';
import day6Input from './day6.input';

describe('Day 6', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = '3,4,3,1,2';
      expect(solvePart1(input)).toBe(5934);
    });

    test('real puzzle', () => {
      const result = solvePart1(day6Input);
      expect(result).toBe(349549);
    });
  });
});
