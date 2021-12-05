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

type Line = [Point, Point];

const parseInput = (input: string): Line[] => {
  return input.split('\n').map(inputLine => {
    const [point1, point2] = inputLine.split(' -> ');
    return [Point.fromString(point1), Point.fromString(point2)];
  });
}

const calculatePointsInLine = (line: Line): string[] => {
  const [start, end] = line;
  const points: string[] = [];
  if (start.x < end.x) {
    for (let position = start.x; position <= end.x; position += 1) {
      points.push(`${position},${start.y}`)
    }
  } else if (start.x > end.x) {
    for (let position = start.x; position >= end.x; position -= 1) {
      points.push(`${position},${start.y}`)
    }
  } else if (start.y < end.y) {
    for (let position = start.y; position <= end.y; position += 1) {
      points.push(`${start.x},${position}`)
    }
  } else if (start.y > end.y) {
    for (let position = start.y; position >= end.y; position -= 1) {
      points.push(`${start.x},${position}`)
    }
  }
  return points;
};

export function solvePart1 (input: string): number {
  const lines = parseInput(input);
  const points: Record<string, number> = {};
  lines.forEach(line => {
    if (line[0].x !== line[1].x && line[0].y !== line[1].y) return;
    const pointsToProcess = calculatePointsInLine(line);
    pointsToProcess.forEach(point => {
      points[point] ||= 0;
      points[point] += 1;
    })
  });
  return Object.values(points).filter(count => count > 1).length;
}
