export function process (input: string) {
  const measurements = input.split('\n').map(number => parseInt(number));
  let increases = 0;
  // let decreases = 0;
  measurements.forEach((measurement, index) => {
    if (index === 0) return;
    if (measurement > measurements[index -1]) {
      increases += 1;
    } else {
      // decreases += 1;
    }
  });
  return increases;
}
