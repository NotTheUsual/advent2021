import theredoc from 'theredoc';
import { solvePart1 } from './day5';
import { solvePart2, arrayForRange } from './day5b';
import day5Input from './day5.input';

describe('Day 5', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        0,9 -> 5,9
        8,0 -> 0,8
        9,4 -> 3,4
        2,2 -> 2,1
        7,0 -> 7,4
        6,4 -> 2,0
        0,9 -> 2,9
        3,4 -> 1,4
        0,0 -> 8,8
        5,5 -> 8,2
      `;
      expect(solvePart1(input)).toBe(5);
    });

    test('real puzzle', () => {
      const result = solvePart1(day5Input);
      expect(result).toBe(6225);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        0,9 -> 5,9
        8,0 -> 0,8
        9,4 -> 3,4
        2,2 -> 2,1
        7,0 -> 7,4
        6,4 -> 2,0
        0,9 -> 2,9
        3,4 -> 1,4
        0,0 -> 8,8
        5,5 -> 8,2
      `;
      expect(solvePart2(input)).toBe(12);
    });

    test('real puzzle', () => {
      const result = solvePart2(day5Input);
      expect(result).toBe(22116);
    });
  });

  describe('arrayForRange', () => {
    test('produces the correct arrays for different ranges', () => {
      expect(arrayForRange(1, 3)).toEqual([1, 2, 3]);
      expect(arrayForRange(0, 1)).toEqual([0, 1]);
      expect(arrayForRange(5, 8)).toEqual([5, 6, 7, 8]);
    });
  });
});
