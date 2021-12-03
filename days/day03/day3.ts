interface ValueCount {
  zeroes: number;
  ones: number;
}

const createCountGetter = (valueCounts: ValueCount[]) => (index: number) => {
  valueCounts[index] ||= { zeroes: 0, ones: 0 };
  return valueCounts[index];
};

export function solvePart1 (input: string): number {
  const numbers = input.split('\n');
  const valueCounts: ValueCount[] = [];
  const getCountsAt = createCountGetter(valueCounts);

  numbers.forEach((number) => {
    number.split('').forEach((digit, index) => {
      const counts = getCountsAt(index);
      if (digit === '0') counts.zeroes += 1;
      if (digit === '1') counts.ones += 1;
    });
  });

  let gamma = '';
  let epsilon = '';

  valueCounts.forEach(count => {
    if (count.ones > count.zeroes) {
      gamma += '1';
      epsilon += '0';
    } else {
      gamma += '0';
      epsilon += '1';
    }
  });

  const decimalGamma = parseInt(gamma, 2);
  const decimalEpsilon = parseInt(epsilon, 2);

  return decimalGamma * decimalEpsilon;
}