type Grid = number[][];
type Point = [y: number, x: number];

const parseInput = (input: string): Grid => {
  return input.split('\n').map(line => line.split('').map(number => parseInt(number)));
};

const grabNeighbours = (grid: Grid, point: Point): number[] => {
  const [y, x] = point;
  return [
    grid[y - 1]?.[x],
    grid[y + 1]?.[x],
    grid[y]?.[x - 1],
    grid[y]?.[x + 1]
  ];
};

const checkForLowestPoint = (neighbours: number[], position: number): boolean => {
  return neighbours
    .filter(neighbour => neighbour !== undefined)
    .every(neighbour => neighbour > position);
}

export function solvePart1 (input: string): number {
  const grid = parseInput(input);
  const riskLevels: number[] = [];

  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      const position = grid[y][x];

      const neighbours = grabNeighbours(grid, [y, x]);

      const isLowestPoint = checkForLowestPoint(neighbours, position);

      if (isLowestPoint) riskLevels.push(position + 1);
    }
  }

  return riskLevels.reduce((sum, number) => sum + number, 0);
}

const isUphillOf = (grid: Grid, position: number, y: number, x: number): boolean => {
  return grid[y]?.[x] !== 9 && grid[y]?.[x] === position + 1;
};

const findPointsUphill = (grid: Grid, point: Point): Point[] => {
  const [y, x] = point;
  const position = grid[y][x];

  const uphill: Point[] = []
  if (isUphillOf(grid, position, y - 1, x)) uphill.push([y - 1, x]);
  if (isUphillOf(grid, position, y + 1, x)) uphill.push([y + 1, x]);
  if (isUphillOf(grid, position, y, x - 1)) uphill.push([y, x - 1]);
  if (isUphillOf(grid, position, y, x + 1)) uphill.push([y, x + 1]);

  return [
    ...uphill,
    ...uphill.map(uphillPoint => findPointsUphill(grid, uphillPoint)).flat()
  ];
};

export function solvePart2 (input: string): number {
  const grid = parseInput(input);
  const basinSizes: number[] = [];

  for (let y = 0; y < grid.length; y += 1) {
    for (let x = 0; x < grid[y].length; x += 1) {
      const position = grid[y][x];
      const neighbours = grabNeighbours(grid, [y, x]);
      const isLowestPoint = checkForLowestPoint(neighbours, position);
      
      if (isLowestPoint) {
        const allBasinPoints = findPointsUphill(grid, [y, x]);
        const basinPoints = new Set(allBasinPoints.map(point => `${point[0]},${point[1]}`))
        basinSizes.push(basinPoints.size + 1);
      }
    }
  }

  const sortedBasins = basinSizes.sort((a, b) => b - a);
  return sortedBasins[0] * sortedBasins[1] * sortedBasins[2];
}