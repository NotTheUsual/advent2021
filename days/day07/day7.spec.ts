import { solvePart1, solvePart2, fuelForDistance } from './day7';
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

  describe('part 1', () => {
    test('test case', () => {
      const input = '16,1,2,0,4,2,7,1,2,14'
      expect(solvePart2(input)).toBe(168);
    });

    test('real puzzle', () => {
      expect(solvePart2(day7Input)).toBe(348664);
    });
  });

  describe('fuelForDistance', () => {
    test('gets the right fuel count for a given distance', () => {
      expect(fuelForDistance(1)).toBe(1);
      expect(fuelForDistance(2)).toBe(3);
      expect(fuelForDistance(3)).toBe(6);
      expect(fuelForDistance(4)).toBe(10);
      expect(fuelForDistance(5)).toBe(15);
    });
  });
});
