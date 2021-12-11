type Opening = '{' | '[' | '<' | '(';
type Closing = '}' | ']' | '>' | ')'
type Character = Opening | Closing;
const openings = ['{', '<', '[', '('];
const isOpening = (character: Character): character is Opening => openings.includes(character);
// const closings = ['}', '>', ']', ')'];
// const isClosing = (character: Character): character is Closing => closings.includes(character);

const parseInput = (input: string): Character[][] => {
  return input.split('\n').map(line => line.split('').filter(Boolean)) as Character[][];
};

type Status = 'VALID' | 'INCOMPLETE' | 'CORRUPT';
interface Result {
  status: Status;
}
interface CorruptResult extends Result {
  status: 'CORRUPT';
  corruptCharacter: Closing;
}
interface IncompleteResult extends Result {
  status: 'INCOMPLETE';
  stack: Opening[]
};
const isIncompleteResult = (result: Result): result is IncompleteResult => result.status === 'INCOMPLETE';

const PAIRS: Record<Opening, Closing> = {
  '(': ')',
  '<': '>',
  '{': '}',
  '[': ']'
};

const isMatchingPair = (opening: Opening, closing: Closing): boolean => {
  return PAIRS[opening] === closing;
};

const evaluateLine = (line: Character[]): Result => {
  const stack: Opening[] = [];
  for (let character of line) {
    if (isOpening(character)) {
      stack.unshift(character)
    } else {
      if (isMatchingPair(stack[0], character)) {
        stack.shift();
      } else {
        const result: CorruptResult = {
          status: 'CORRUPT',
          corruptCharacter: character
        };
        return result;
      }
    }
  }
  if (stack.length === 0) return { status: 'VALID' };
  const result: IncompleteResult = {
    status: 'INCOMPLETE',
    stack
  };
  return result;
};

const SCORES: Record<Opening, number> = {
  '(': 1,
  '[': 2,
  '{': 3,
  '<': 4
};

const scoreResult = (result: IncompleteResult): number => {
  return result.stack.reduce((total, character) => {
    return (total * 5) + SCORES[character];
  }, 0);
}

export function solvePart2 (input: string): number {
  const lines = parseInput(input);
  const scores: number[] = [];
  for (let line of lines) {
    const result = evaluateLine(line);
    if (isIncompleteResult(result)) {
      scores.push(scoreResult(result));
    }
  }
  const sortedScores = scores.sort((a, b) => a - b);
  return sortedScores[(sortedScores.length - 1) / 2];
}
