const inNumericOrder = (a: number, b: number): number => a - b;

type Counts = Record<string, number>;
const createCounter = () => new Proxy<Counts>({}, { get: (target, name: string) => name in target ? target[name] : 0 })

export function solvePart1 (input: string): number {
  const numbers = input.split(',').map(number => parseInt(number)).sort(inNumericOrder);
  const counts = createCounter();

  for (let position = (numbers.at(0) || 0); position <= (numbers.at(-1) || 0); position += 1) {
    counts[position] = numbers.reduce((total, number) => {
      return total + Math.abs(number - position);
    }, 0);
  }

  const bestPosition = Object.keys(numbers).sort((a, b) => counts[a] - counts[b])[0];
  return counts[bestPosition];
}
