import theredoc from 'theredoc';
import { solvePart1 } from './day11';
import { solvePart2 } from './day11b';
import day11Input from './day11.input';

describe('Day 11', () => {
  describe('part 1', () => {
    test('small test', () => {
      const input = theredoc`
        11111
        19991
        19191
        19991
        11111`;
      expect(solvePart1(input, 1)).toBe(9);
    });

    test('test case - 2', () => {
      const input = theredoc`
        5483143223
        2745854711
        5264556173
        6141336146
        6357385478
        4167524645
        2176841721
        6882881134
        4846848554
        5283751526`;
      expect(solvePart1(input, 2)).toBe(35);
    });

    test('test case - 3', () => {
      const input = theredoc`
        5483143223
        2745854711
        5264556173
        6141336146
        6357385478
        4167524645
        2176841721
        6882881134
        4846848554
        5283751526`;
      expect(solvePart1(input, 3)).toBe(80);
    });

    test('test case - 4', () => {
      const input = theredoc`
        5483143223
        2745854711
        5264556173
        6141336146
        6357385478
        4167524645
        2176841721
        6882881134
        4846848554
        5283751526`;
      expect(solvePart1(input, 4)).toBe(96);
    });

    test('test case - 10', () => {
      const input = theredoc`
        5483143223
        2745854711
        5264556173
        6141336146
        6357385478
        4167524645
        2176841721
        6882881134
        4846848554
        5283751526`;
      expect(solvePart1(input, 10)).toBe(204);
    });

    test('test case', () => {
      const input = theredoc`
        5483143223
        2745854711
        5264556173
        6141336146
        6357385478
        4167524645
        2176841721
        6882881134
        4846848554
        5283751526`;
      expect(solvePart1(input)).toBe(1656);
    });

    test('real puzzle', () => {
      const result = solvePart1(day11Input);
      expect(result).toBe(1652);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        5483143223
        2745854711
        5264556173
        6141336146
        6357385478
        4167524645
        2176841721
        6882881134
        4846848554
        5283751526`;
      expect(solvePart2(input)).toBe(195);
    });

    test('real puzzle', () => {
      const result = solvePart2(day11Input);
      expect(result).toBe(220);
    });
  });
});
