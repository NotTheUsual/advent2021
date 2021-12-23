type BaseGrid = number[][];

class Grid {
  baseGrid: BaseGrid;
  iterations: number = 0;

  constructor (input: string) {
    this.baseGrid = parseInput(input);
  }

  process = (): boolean => {
    this.iterations += 1;
    for (let y = 0; y < this.baseGrid.length; y += 1) {
      for (let x = 0; x < this.baseGrid[y].length; x += 1) {
        this.increment(y, x);
      }
    }
    return this.evaluate();
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

  evaluate = (): boolean => {
    let flashes = 0;
    for (let y = 0; y < this.baseGrid.length; y += 1) {
      for (let x = 0; x < this.baseGrid[y].length; x += 1) {
        if (this.baseGrid[y][x] > 9) {
          flashes += 1;
          this.baseGrid[y][x] = 0;
        }
      }
    }
    return flashes === (this.baseGrid.length * this.baseGrid[0].length);
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

export function solvePart2 (input: string): number {
  let solved = false;
  const grid = new Grid(input);

  while (solved === false) {
    solved = grid.process();
  }

  return grid.iterations;
}
