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
