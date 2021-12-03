import theredoc from 'theredoc';
import { process, process2 } from './day1';
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

  describe('part 2', () => {
    test('test case', () => {
      expect(process2(theredoc`
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
      `)).toBe(5);
    });

    test('real puzzle', () => {
      const result = process2(day1Input);
      expect(result).toBe(1344);
    });
  });
});