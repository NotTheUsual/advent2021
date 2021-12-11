import theredoc from 'theredoc';
import { solvePart1 } from './day10';
import { solvePart2 } from './day10b';
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

  describe('part 2', () => {
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
      expect(solvePart2(input)).toBe(288957);
    });

    test('real puzzle', () => {
      const result = solvePart2(day10Input);
      expect(result).toBe(2360030859);
    });
  });
});
