import theredoc from 'theredoc';
import { solvePart1 } from './day2';
import day2Input from './day2.input';

describe('Day 2', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        forward 5
        down 5
        forward 8
        up 3
        down 8
        forward 2
      `;
      expect(solvePart1(input)).toBe(150);
    });

    test('real puzzle', () => {
      const result = solvePart1(day2Input);
      expect(result).toBe(1636725);
    });
  });

  // describe('part 2', () => {
  //   test('test case', () => {
  //     expect(process2(theredoc`
  //       199
  //       200
  //       208
  //       210
  //       200
  //       207
  //       240
  //       269
  //       260
  //       263
  //     `)).toBe(5);
  //   });

  //   test('real puzzle', () => {
  //     const result = process2(day1Input);
  //     expect(result).toBe(1344);
  //   });
  // });
});