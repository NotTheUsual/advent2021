class Point {
  x: number;
  y: number;

  constructor (x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  static fromString (coordinates: string): Point {
    const [x, y] = coordinates.split(',');
    return new Point(parseInt(x), parseInt(y));
  }

  toString () {
    return `${this.x},${this.y}`;
  }
}

type Direction = '➡️' | '⬅️' | '⬆️' | '⬇️' | '↗️' | '↘️' | '↙️' | '↖️';

const calculateDirection = (start: Point, end: Point): Direction => {
  if (start.x === end.x) return (start.y > end.y) ? '⬆️' : '⬇️';
  if (start.y === end.y) return (start.x > end.x) ? '⬅️' : '➡️';
  if (start.x > end.x) return (start.y > end.y) ? '↖️' : '↙️';
  if (start.x < end.x) return (start.y > end.y) ? '↗️' : '↘️';
  console.error('😬');
  return '➡️';
}

class Line {
  start: Point;
  end: Point;
  direction: Direction;

  constructor (inputLine: string) {
    const [point1, point2] = inputLine.split(' -> ');
    this.start = Point.fromString(point1);
    this.end = Point.fromString(point2);
    this.direction = calculateDirection(this.start, this.end);
  }
}

const parseInput = (input: string): Line[] => {
  return input.split('\n').map(inputLine => new Line(inputLine));
}

export const arrayForRange = (start: number, end: number): number[] => {
  return [...new Array(end + 1)].map((__, index) => index).slice(start);
}

const calculatePointsInLine = (line: Line): string[] => {
  const points: string[] = [];
  switch (line.direction) {
    case '➡️':
      return arrayForRange(line.start.x, line.end.x).map(x => `${x},${line.start.y}`);
    case '⬅️':
      return arrayForRange(line.end.x, line.start.x).map(x => `${x},${line.start.y}`);
    case '⬇️':
      return arrayForRange(line.start.y, line.end.y).map(y => `${line.start.x},${y}`);
    case '⬆️':
      return arrayForRange(line.end.y, line.start.y).map(y => `${line.start.x},${y}`);
    case '↘️':
      for (let offset = 0; offset <= (line.end.x - line.start.x); offset += 1) {
        points.push(`${line.start.x + offset},${line.start.y + offset}`);
      }
      return points;
    case '↗️':
      for (let offset = 0; offset <= (line.end.x - line.start.x); offset += 1) {
        points.push(`${line.start.x + offset},${line.start.y - offset}`);
      }
      return points;
    case '↙️':
      for (let offset = 0; offset <= (line.start.x - line.end.x); offset += 1) {
        points.push(`${line.start.x - offset},${line.start.y + offset}`);
      }
      return points;
    case '↖️':
      for (let offset = 0; offset <= (line.start.x - line.end.x); offset += 1) {
        points.push(`${line.start.x - offset},${line.start.y - offset}`);
      }
      return points;
  }
};

export function solvePart2 (input: string): number {
  const lines = parseInput(input);
  const points: Record<string, number> = {};
  lines.forEach(line => {
    const pointsToProcess = calculatePointsInLine(line);
    pointsToProcess.forEach(point => {
      points[point] ||= 0;
      points[point] += 1;
    })
  });
  return Object.values(points).filter(count => count > 1).length;
}
