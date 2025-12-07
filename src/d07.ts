import { Point } from './point';

export function p1(input: string) {
  const [grid, start, height] = buildGrid(input);
  let queue = new Map();
  addPoint(queue, start);
  let splits = 0;
  while (queue.size) {
    const newQueue = new Map();
    for (const beam of queue.values()) {
      const next = beam.south();
      if (next.y >= height) {
        continue;
      } else if (grid.has(next.hash())) {
        splits++;
        addPoint(newQueue, next.west());
        addPoint(newQueue, next.east());
      } else {
        addPoint(newQueue, next);
      }
    }
    queue = newQueue;
  }
  return splits;
};

export function p2(input: string) {
  const [grid, start, height] = buildGrid(input);
  let queue = new Map();
  addPointCount(queue, start, 1);
  while (queue.values().next().value[0].y < height) {
    const newQueue = new Map();
    for (const [beam, count] of queue.values()) {
      const next = beam.south();
      if (grid.has(next.hash())) {
        addPointCount(newQueue, next.west(), count);
        addPointCount(newQueue, next.east(), count);
      } else {
        addPointCount(newQueue, next, count);
      }
    }
    queue = newQueue;
  }
  return queue.values().reduce((acc, [_, count]) => acc + count, 0);
};

const buildGrid = (input: string) => {
  const lines = input.trim().split('\n');
  const grid = new Map();
  let start;
  for (let y = 0; y < lines.length; y++) {
    for (let x = 0; x < lines[y].length; x++) {
      const char = lines[y][x];
      if (char === 'S') {
        start = new Point(x, y);
      } else if (char === '^') {
        const point = new Point(x, y);
        grid.set(point.hash(), point);
      }
    }
  }
  return [grid, start, lines.length];
}

const addPoint = (map: Map<String, Point>, point: Point) => {
  map.set(point.hash(), point);
}

const addPointCount = (map: Map<String, Point>, point: Point, count: number) => {
  map.getOrInsertComputed(point.hash(), _ => [point, 0])[1] += count;
}
