import theredoc from 'theredoc';
import { solvePart1, solvePart2 } from './day13';
import day13Input from './day13.input';

describe('Day 13', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        6,10
        0,14
        9,10
        0,3
        10,4
        4,11
        6,0
        6,12
        4,1
        0,13
        10,12
        3,4
        3,0
        8,4
        1,10
        2,14
        8,10
        9,0
        
        fold along y=7
        fold along x=5`;
      expect(solvePart1(input)).toBe(17);
    });

    test('real puzzle', () => {
      const result = solvePart1(day13Input);
      expect(result).toBe(687);
    });
  });

  describe('part 2', () => {
    test('real puzzle', () => {
      const result = solvePart2(day13Input);
      expect(result).toBe(theredoc`
        ####..##..#..#..##..#..#.###..####..##..
        #....#..#.#.#..#..#.#.#..#..#....#.#..#.
        ###..#....##...#....##...###....#..#....
        #....#.##.#.#..#....#.#..#..#..#...#.##.
        #....#..#.#.#..#..#.#.#..#..#.#....#..#.
        #.....###.#..#..##..#..#.###..####..###.
      `);
    });
  });
});
