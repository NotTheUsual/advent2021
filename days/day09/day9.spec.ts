import theredoc from 'theredoc';
import { solvePart1, solvePart2 } from './day9';
import day9Input from './day9.input';

describe('Day 9', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        2199943210
        3987894921
        9856789892
        8767896789
        9899965678
      `;
      expect(solvePart1(input)).toBe(15);
    });

    test('real puzzle', () => {
      const result = solvePart1(day9Input);
      expect(result).toBe(524);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        2199943210
        3987894921
        9856789892
        8767896789
        9899965678
      `;
      expect(solvePart2(input)).toBe(1134);
    });

    test('real puzzle', () => {
      const result = solvePart2(day9Input);
      expect(result).toBe(734095);
    });
  });
});
