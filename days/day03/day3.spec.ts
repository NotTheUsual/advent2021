import theredoc from 'theredoc';
import { solvePart1 } from './day3';
import day3Input from './day3.input';

describe('Day 3', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        00100
        11110
        10110
        10111
        10101
        01111
        00111
        11100
        10000
        11001
        00010
        01010
      `;
      expect(solvePart1(input)).toBe(198);
    });

    test('real puzzle', () => {
      const result = solvePart1(day3Input);
      expect(result).toBe(2954600);
    });
  });
});