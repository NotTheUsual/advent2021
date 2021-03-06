interface Link {
  from: string;
  to: string;
}

const parseInput = (input: string): Link[] => {
  return input.split('\n').map(line => {
    const [from, to] = line.split('-');
    return { from, to };
  });
}

type CaveSystem = Record<string, Set<string>>;

const registerLink = (from: string, to: string, map: CaveSystem): void => {
  if (!map[from]) map[from] = new Set();
  map[from].add(to);
};

const constructMap = (links: Link[]): CaveSystem => {
  const map: CaveSystem = {};
  for (const link of links) {
    registerLink(link.from, link.to, map);
    registerLink(link.to, link.from, map);
  }
  return map;
};

export const isUpperCase = (str: string): boolean => {
  return str.toUpperCase() === str;
}

type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

const findRoutes = (map: CaveSystem, currentPosition: string, history: string[]): ValueOrArray<string>[] => {
  const nextSteps = map[currentPosition];
  const routes = [...nextSteps].map((location) => {
    if (location === 'end') return history.concat([location]);
    if (isUpperCase(location) || !history.includes(location)) {
      return findRoutes(map, location, history.concat([location]));
    }
  });
  return routes.filter(Boolean).flat() as ValueOrArray<string>[];
};

export function solvePart1 (input: string): number {
  const links = parseInput(input);
  const caveSystem = constructMap(links);
  const allRoutes = findRoutes(caveSystem, 'start', ['start']);
  return allRoutes.filter(route => route === 'end').length;
}

class History {
  entries: string[];
  hasRevisitedSmallCave: boolean;

  constructor (entries: string[], hasRevisitedSmallCave: boolean) {
    this.entries = entries;
    this.hasRevisitedSmallCave = hasRevisitedSmallCave;
  }

  static startingAt (location: string): History {
    return new History([location], false);
  }

  add (location: string): History {
    return new History(this.entries.concat([location]), this.hasRevisitedSmallCave);
  }

  includes (location: string): boolean {
    return this.entries.includes(location);
  }
}

const findRoutes2 = (map: CaveSystem, currentPosition: string, history: History): ValueOrArray<string>[] => {
  const nextSteps = map[currentPosition];
  const routes = [...nextSteps].map((location) => {
    // 1. End state
    if (location === 'end') return history.add(location).entries;
    // 2. Large caves
    // 3. Unvisited small caves
    if (isUpperCase(location) || !history.includes(location)) {
      return findRoutes2(map, location, history.add(location));
    }
    // 4. Small caves post revisiting
    // 5. Start cave
    if (history.hasRevisitedSmallCave || location === 'start') return;

    // 6. Revisting a small cave
    const newHistory = history.add(location);
    newHistory.hasRevisitedSmallCave = true;
    return findRoutes2(map, location, newHistory);
  });
  return routes.filter(Boolean).flat() as ValueOrArray<string>[];
};

export function solvePart2 (input: string): number {
  const links = parseInput(input);
  const caveSystem = constructMap(links);
  const allRoutes = findRoutes2(caveSystem, 'start', History.startingAt('start'));
  return allRoutes.filter(route => route === 'end').length;
}
