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

const calculateCounts = (numbers: string[], index: number): ValueCount => {
  const counts: ValueCount = { zeroes: 0, ones: 0 };
  numbers.forEach(number => {
    if (number[index] === '0') counts.zeroes += 1;
    if (number[index] === '1') counts.ones += 1;
  });
  return counts;
};

const findO2GeneratorRating = (numbers: string[]): string => {
  let filteredNumbers = [...numbers];

  for (let index = 0; index < numbers[0].length; index += 1) {
    const counts = calculateCounts(filteredNumbers, index);
    const commonValue = (counts.zeroes > counts.ones) ? '0' : '1';
    filteredNumbers = filteredNumbers.filter(number => number[index] === commonValue);
    if (filteredNumbers.length === 1) return filteredNumbers[0];
  }

  console.log(`ODD: there are ${filteredNumbers.length} filtered o2 numbers`);
  return filteredNumbers[0];
}

const findCO2ScrubberRating = (numbers: string[]): string => {
  let filteredNumbers = [...numbers];

  for (let index = 0; index < numbers[0].length; index += 1) {
    const counts = calculateCounts(filteredNumbers, index);
    const uncommonValue = (counts.zeroes <= counts.ones) ? '0' : '1';
    filteredNumbers = filteredNumbers.filter(number => number[index] === uncommonValue);
    if (filteredNumbers.length === 1) return filteredNumbers[0];
  }

  console.log(`ODD: there are ${filteredNumbers.length} filtered co2 numbers`);
  return filteredNumbers[0];
}

export function solvePart2 (input: string): number {
  const numbers = input.split('\n');
  const o2BinaryRating = findO2GeneratorRating(numbers);
  const co2BinaryRating = findCO2ScrubberRating(numbers);

  return parseInt(o2BinaryRating, 2) * parseInt(co2BinaryRating, 2);
}