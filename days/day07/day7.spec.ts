// import theredoc from 'theredoc';
import { solvePart1 } from './day7';
import day7Input from './day7.input';

describe('Day 7', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = '16,1,2,0,4,2,7,1,2,14'
      expect(solvePart1(input)).toBe(37);
    });

    test('real puzzle', () => {
      const result = solvePart1(day7Input);
      expect(result).toBe(348664);
    });
  });
});
