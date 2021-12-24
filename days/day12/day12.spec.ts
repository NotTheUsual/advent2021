import theredoc from 'theredoc';
import { solvePart1, solvePart2, isUpperCase } from './day12';
import day12Input from './day12.input';

describe('Day 12', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        start-A
        start-b
        A-c
        A-b
        b-d
        A-end
        b-end`
      expect(solvePart1(input)).toBe(10);
    });
    
    test('larger test case', () => {
      const input = theredoc`
        dc-end
        HN-start
        start-kj
        dc-start
        dc-HN
        LN-dc
        HN-end
        kj-sa
        kj-HN
        kj-dc`
      expect(solvePart1(input)).toBe(19);
    });
    
    test('largest test case', () => {
      const input = theredoc`
        fs-end
        he-DX
        fs-he
        start-DX
        pj-DX
        end-zg
        zg-sl
        zg-pj
        pj-he
        RW-he
        fs-DX
        pj-RW
        zg-RW
        start-pj
        he-WI
        zg-he
        pj-fs
        start-RW`
      expect(solvePart1(input)).toBe(226);
    });

    test('real puzzle', () => {
      const result = solvePart1(day12Input);
      expect(result).toBe(3369);
    });
  });

  describe('part 2', () => {
    test('test case', () => {
      const input = theredoc`
        start-A
        start-b
        A-c
        A-b
        b-d
        A-end
        b-end`
      expect(solvePart2(input)).toBe(36);
    });
    
    test('larger test case', () => {
      const input = theredoc`
        dc-end
        HN-start
        start-kj
        dc-start
        dc-HN
        LN-dc
        HN-end
        kj-sa
        kj-HN
        kj-dc`
      expect(solvePart2(input)).toBe(103);
    });
    
    test('largest test case', () => {
      const input = theredoc`
        fs-end
        he-DX
        fs-he
        start-DX
        pj-DX
        end-zg
        zg-sl
        zg-pj
        pj-he
        RW-he
        fs-DX
        pj-RW
        zg-RW
        start-pj
        he-WI
        zg-he
        pj-fs
        start-RW`
      expect(solvePart2(input)).toBe(3509);
    });

    test('real puzzle', () => {
      const result = solvePart2(day12Input);
      expect(result).toBe(85883);
    });
  });

  describe('isUpperCase', () => {
    test('knows if something is upper case', () => {
      expect(isUpperCase('A')).toBe(true);
      expect(isUpperCase('HN')).toBe(true);
    });

    test('knows if something is not upper case', () => {
      expect(isUpperCase('b')).toBe(false);
      expect(isUpperCase('dc')).toBe(false);
    });
  });
});
