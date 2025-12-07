import { Point } from './point';

export function p1(input: string) {
  const grid = buildGrid(input);
  return Array.from(grid.values())
    .filter(point => isAccessible(grid, point))
    .length;
};

export function p2(input: string) {
  const grid = buildGrid(input);
  let removed = 0;
  let lastRemoved = 0;
  do {
    lastRemoved = removed;
    for (const [hash, point] of grid.entries()) {
      if (isAccessible(grid, point)) {
        grid.delete(hash);
        removed++;
      }
    }
  } while (lastRemoved !== removed);
  return removed;
};

const buildGrid = (input: string) => {
  const lines = input.trim().split('\n');
  const grid = new Map();
  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].length; x++) {
      if (lines[y][x] === '@') {
        const point = new Point(x, y);
        grid.set(point.hash(), point);
      }
    }
  }
  return grid;
}

const isAccessible = (grid: Map<string>, point: Point): boolean => {
  const adjacent = [
    point.northwest(),
    point.north(),
    point.northeast(),
    point.east(),
    point.southeast(),
    point.south(),
    point.southwest(),
    point.west()
  ] .filter(other => grid.get(other.hash())).length;
  return adjacent < 4;
}
