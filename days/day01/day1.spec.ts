import theredoc from 'theredoc';
import { process } from './day1';
import day1Input from './day1.input';

describe('Day 1', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        199
        200
        208
        210
        200
        207
        240
        269
        260
        263
      `;
      expect(process(input)).toBe(7);
    });

    test('real puzzle', () => {
      const result = process(day1Input);
      expect(result).toBe(1316);
    });
  });
});