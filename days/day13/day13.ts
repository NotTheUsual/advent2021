class Grid {
  #grid: boolean[][];

  constructor () {
    this.#grid = [[]];
  }

  mark (x: number, y: number) {
    if (y >= this.#grid.length) {
      for (let index = this.#grid.length; index <= y; index += 1) {
        this.#grid.push([])
      }
    }
    if (x >= this.#grid[y].length) {
      for (let index = this.#grid[y].length; index <= x; index += 1) {
        this.#grid[y].push(false)
      }
    }
    this.#grid[y][x] = true;
  }

  fold (fold: Fold) {
    if (fold.axis === 'y') {
      for (let index = 1; index < this.#grid.length - fold.number; index += 1) {
        this.#grid[fold.number + index].forEach((cell, cellIndex) => {
          this.#grid[fold.number - index][cellIndex] ||= cell;
        });
      }
      this.#grid.splice(fold.number);
    } else {
      for (const row of this.#grid) {
        for (let index = 1; index < row.length - fold.number; index += 1) {
          row[fold.number - index] ||= row[fold.number + index];
        }
        row.splice(fold.number);
      }
    }
  }

  get pointCount (): number {
    return this.#grid.flat().filter(Boolean).length;
  }

  toString (): string {
    return this.#grid.map(line => line.map(cell => cell ? '#' : '.').join('')).join('\n');
  }
}

interface Fold {
  axis: 'x' | 'y';
  number: number;
}

interface ParsedInput {
  grid: Grid;
  folds: Fold[];
}

const parseInput = (input: string): ParsedInput => {
  const [pointLines, foldLines] = input.split('\n\n');
  const grid = new Grid();
  pointLines.split('\n').forEach(line => {
    const [x, y] = line.split(',');
    grid.mark(parseInt(x), parseInt(y));
  });
  const folds = foldLines.split('\n').map((line): Fold => {
    const [, axis, number] = line.match(/fold along ([xy])=(\d+)/) as RegExpMatchArray;
    return { axis: axis as 'x' | 'y', number: parseInt(number) };
  });
  return { grid, folds };
};

export function solvePart1 (input: string): number {
  const { grid, folds } = parseInput(input);
  grid.fold(folds[0]);
  return grid.pointCount;
}

export function solvePart2 (input: string): string {
  const { grid, folds } = parseInput(input);
  folds.forEach(fold => {
    grid.fold(fold);
  });
  return grid.toString();
}
