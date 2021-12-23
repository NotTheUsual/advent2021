type BaseGrid = number[][];

class Grid {
  baseGrid: BaseGrid;
  flashes: number = 0;

  constructor (input: string) {
    this.baseGrid = parseInput(input);
  }

  process = () => {
    for (let y = 0; y < this.baseGrid.length; y += 1) {
      for (let x = 0; x < this.baseGrid[y].length; x += 1) {
        this.increment(y, x);
      }
    }
    this.evaluate();
  };

  increment = (y: number, x: number) => {
    if (!this.baseGrid[y]?.[x] && this.baseGrid[y]?.[x] !== 0) return;
    this.baseGrid[y][x] += 1;
    if (this.baseGrid[y][x] === 10) {
      this.increment(y - 1, x - 1);
      this.increment(y - 1, x);
      this.increment(y - 1, x + 1);
      this.increment(y, x - 1);
      this.increment(y, x + 1);
      this.increment(y + 1, x - 1);
      this.increment(y + 1, x);
      this.increment(y + 1, x + 1);
    }
  };

  evaluate = () => {
    for (let y = 0; y < this.baseGrid.length; y += 1) {
      for (let x = 0; x < this.baseGrid[y].length; x += 1) {
        if (this.baseGrid[y][x] > 9) {
          this.flashes += 1;
          this.baseGrid[y][x] = 0;
        }
      }
    }
  }

  toString = (): string => {
    return this.baseGrid.map(line => line.join('')).join('\n');
  }
}

const parseInput = (input: string): BaseGrid => {
  return input
    .split('\n')
      .map(line =>
        line.split('')
          .map(number => parseInt(number))
      );
};

const doTimes = (times: number, predicate: () => void): void => {
  [...new Array(times)].forEach(predicate);
};

export function solvePart1 (input: string, times: number = 100): number {
  const grid = new Grid(input);

  doTimes(times, () => {
    grid.process();
  });

  return grid.flashes;
}
