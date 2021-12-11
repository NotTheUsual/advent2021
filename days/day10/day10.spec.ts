import theredoc from 'theredoc';
import { solvePart1 } from './day10';
import day10Input from './day10.input';

describe('Day 10', () => {
  describe('part 1', () => {
    test('test case', () => {
      const input = theredoc`
        [({(<(())[]>[[{[]{<()<>>
        [(()[<>])]({[<{<<[]>>(
        {([(<{}[<>[]}>{[]{[(<()>
        (((({<>}<{<{<>}{[]{[]{}
        [[<[([]))<([[{}[[()]]]
        [{[{({}]{}}([{[{{{}}([]
        {<[[]]>}<{[{[{[]{()[[[]
        [<(<(<(<{}))><([]([]()
        <{([([[(<>()){}]>(<<{{
        <{([{{}}[<[[[<>{}]]]>[]]
      `;
      expect(solvePart1(input)).toBe(26397);
    });

    test('real puzzle', () => {
      const result = solvePart1(day10Input);
      expect(result).toBe(321237);
    });
  });
});
