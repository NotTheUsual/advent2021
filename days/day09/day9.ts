type Grid = number[][];

const parseInput = (input: string): Grid => {
  return input.split('\n').map(line => line.split('').map(number => parseInt(number)));
};

export function solvePart1 (input: string): number {
  const grid = parseInput(input);
  const riskLevels: number[] = [];

  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      const position = grid[y][x];

      const neighbours = [
        grid[y - 1]?.[x],
        grid[y + 1]?.[x],
        grid[y]?.[x - 1],
        grid[y]?.[x + 1]
      ];

      const isLowestPoint = neighbours
        .filter(neighbour => neighbour !== undefined)
        .every(neighbour => neighbour > position);

      if (isLowestPoint) riskLevels.push(position + 1);
    }
  }

  return riskLevels.reduce((sum, number) => sum + number, 0);
}
