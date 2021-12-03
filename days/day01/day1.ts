const parseInput = (input: string): number[] => input.split('\n').map(number => parseInt(number));

export function process (input: string) {
  const measurements = parseInput(input);
  let increases = 0;
  measurements.forEach((measurement, index) => {
    if (index === 0) return;
    if (measurement > measurements[index -1]) {
      increases += 1;
    }
  });
  return increases;
}

const generateWindowCalculatorFor = (measurements: number[]) => (index: number) => {
  return measurements[index] + measurements[index - 1] + measurements[index - 2];
}

export function process2 (input: string): number {
  const measurements = parseInput(input);
  const calculateWindowSumAt = generateWindowCalculatorFor(measurements);
  let increases = 0;
  for (let index = 3; index < measurements.length; index += 1) {
    if (calculateWindowSumAt(index) > calculateWindowSumAt(index - 1)) {
      increases += 1;
    }
  }
  return increases;
}
