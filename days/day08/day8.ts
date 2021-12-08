const grabOutputDigits = (input: string): string[] => {
  const lines = input.split('\n');
  const allOutputDigits = lines.map(line => {
    const [,outputValue] = line.split(' | ');
    return outputValue.split(' ');
  });
  return allOutputDigits.flat();
};

export function solvePart1 (input: string): number {
  const outputDigits = grabOutputDigits(input);
  return outputDigits.filter(digit => (
    digit.length === 2 ||
    digit.length === 3 ||
    digit.length === 4 ||
    digit.length === 7
  )).length;
}


//  aaaa  
// b    c
// b    c
//  dddd  
// e    f
// e    f
//  gggg  

interface Line {
  uniqueSignalPatterns: string[];
  outputDigits: string[]
}
const parseDigits = (input: string): string[] => input.split(' ').map(digit => digit.split('').sort().join(''));
const toLine = (inputLine: string): Line => {
  const [usp, output] = inputLine.split(' | ');
  return {
    uniqueSignalPatterns: parseDigits(usp),
    outputDigits: parseDigits(output)
  };
}

type Lookup = Record<string,number>;
const lookupTableForLine = (line: Line): Lookup => {
  const remainingValues = new Set(line.uniqueSignalPatterns);

  const one = line.uniqueSignalPatterns.find(digit => digit.length === 2) || '';
  remainingValues.delete(one);
  const four = line.uniqueSignalPatterns.find(digit => digit.length === 4) || '';
  remainingValues.delete(four);
  const seven = line.uniqueSignalPatterns.find(digit => digit.length === 3) || '';
  remainingValues.delete(seven)
  const eight = line.uniqueSignalPatterns.find(digit => digit.length === 7) || '';
  remainingValues.delete(eight);

  const oneParts = one.split('');
  const f = oneParts.find(part => line.uniqueSignalPatterns.filter(digit => !digit.includes(part)).length === 1) || '';
  const c = oneParts.find(part => part !== f) || '';
  
  const two = line.uniqueSignalPatterns.find(digit => !digit.includes(f)) || '';
  remainingValues.delete(two);
  const five = line.uniqueSignalPatterns.find(digit => !digit.includes(c) && digit.length === 5) || '';
  remainingValues.delete(five);
  const six = line.uniqueSignalPatterns.find(digit => !digit.includes(c) && digit.length === 6) || '';
  remainingValues.delete(six);

  const three = line.uniqueSignalPatterns.find(digit => digit.length === 5 && remainingValues.has(digit)) || '';
  remainingValues.delete(three);

  const bd = four.split('').filter(letter => !one.includes(letter));
  const nine = line.uniqueSignalPatterns.find(digit => remainingValues.has(digit) && digit.includes(bd[0]) && digit.includes(bd[1])) || '';
  remainingValues.delete(nine);

  if (remainingValues.size !== 1) console.error('!!!!!!!');

  const zero = Array.from(remainingValues)[0];

  return {
    [zero]: 0,
    [one]: 1,
    [two]: 2,
    [three]: 3,
    [four]: 4,
    [five]: 5,
    [six]: 6,
    [seven]: 7,
    [eight]: 8,
    [nine]: 9
  };
};

const sum = (a: number, b: number): number => a + b;

const outputValueForLine = (line: Line): number => {
  const lookup = lookupTableForLine(line);
  const realDigits = line.outputDigits.map(digit => lookup[digit]);
  return parseInt(realDigits.map(digit => String(digit)).join(''));
};

export function solvePart2 (input: string): number {
  const lines = input.split('\n').map(toLine);
  const outputValues = lines.map(outputValueForLine);
  return outputValues.reduce(sum);
}
