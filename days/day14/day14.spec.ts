import theredoc from 'theredoc';
import { solvePart1, insertAtIndex } from './day14';
import day14Input from './day14.input';

describe('Day 14', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        NNCB

        CH -> B
        HH -> N
        CB -> H
        NH -> C
        HB -> C
        HC -> B
        HN -> C
        NN -> C
        BH -> H
        NC -> B
        NB -> B
        BN -> B
        BB -> N
        BC -> B
        CC -> N
        CN -> C`;
      expect(solvePart1(input)).toBe(1588);
    });

    test.skip('real puzzle', () => {
      const result = solvePart1(day14Input);
      expect(result).toBe(2954600);
    });
  });

  describe('insertAtIndex', () => {
    test('inserts a string at a given index', () => {
      expect(insertAtIndex('01245', '3', 3)).toBe('012345');
    });
  });
});
