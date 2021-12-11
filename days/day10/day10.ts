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
const isCorruptResult = (result: Result): result is CorruptResult => result.status === 'CORRUPT';

const isMatchingPair = (opening: Opening, closing: Closing): boolean => {
  return (
    opening === '(' && closing === ')' ||
    opening === '<' && closing === '>' ||
    opening === '{' && closing === '}' ||
    opening === '[' && closing === ']'
  );
}

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
  return (stack.length === 0) ? { status: 'VALID' } : { status: 'INCOMPLETE' };
};

const SCORES: Record<Closing, number> = {
  ')': 3,
  ']': 57,
  '}': 1197,
  '>': 25137
};

const scoreResult = (corruptCharacters: Closing[]): number => {
  return corruptCharacters.reduce((total, character) => total + SCORES[character], 0);
}

export function solvePart1 (input: string): number {
  const lines = parseInput(input);
  const corruptCharacters: Closing[] = [];
  for (let line of lines) {
    const result = evaluateLine(line);
    if (isCorruptResult(result)) {
      corruptCharacters.push(result.corruptCharacter);
    }
  }
  return scoreResult(corruptCharacters);
}
