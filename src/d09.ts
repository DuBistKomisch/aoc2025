import { Point } from './point';

export function p1(input: string) {
  const points = input.trim().split('\n')
    .map(line => line.split(',').map(n => parseInt(n, 10)));

  let bestArea = 0;
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [ax, ay] = points[i];
      const [bx, by] = points[j];
      const area = (Math.abs(ax - bx) + 1) * (Math.abs(ay - by) + 1);
      if (area > bestArea) {
        bestArea = area;
      }
    }
  }

  return bestArea;
};

export function p2(input: string) {
  const points = input.trim().split('\n')
    .map(line => {
      const [x, y] = line.split(',').map(n => parseInt(n, 10));
      return new Point(x, y);
    });

  const xs = [...new Set(points.map(point => point.x).sort((a, b) => a - b))];
  const ys = [...new Set(points.map(point => point.y).sort((a, b) => a - b))];
  const minipoints = points.map(point => new Point(xs.indexOf(point.x), ys.indexOf(point.y)));

  const walls = new Set();
  for (let i = 0; i < minipoints.length; i++) {
    const a = minipoints[i];
    const b = minipoints[(i + 1) % minipoints.length];
    if (a.x === b.x) {
      for (let j = Math.min(a.y, b.y); j <= Math.max(a.y, b.y); j++) {
        walls.add(new Point(a.x, j).hash());
      }
    } else if (a.y === b.y) {
      for (let j = Math.min(a.x, b.x); j <= Math.max(a.x, b.x); j++) {
        walls.add(new Point(j, a.y).hash());
      }
    }
  }

  const outside = new Set();
  let queue = [new Point(-1, -1)];
  while (queue.length) {
    const nextQueue = [];
    for (const point of queue) {
      if (point.x < -1 || point.x > xs.length || point.y < -1 || point.y > ys.length) {
        continue;
      }
      const hash = point.hash();
      if (outside.has(hash) || walls.has(hash)) {
        continue;
      }
      outside.add(hash);
      nextQueue.push(point.north(), point.east(), point.south(), point.west());
    }
    queue = nextQueue;
  }

  let bestArea = 0;
  for (let i = 0; i < minipoints.length; i++) {
    next: for (let j = i + 1; j < minipoints.length; j++) {
      const a = points[i];
      const b = points[j];
      const area = (Math.abs(a.x - b.x) + 1) * (Math.abs(a.y - b.y) + 1);
      if (area <= bestArea) {
        continue;
      }
      const minia = minipoints[i];
      const minib = minipoints[j];
      for (let x = Math.min(minia.x, minib.x); x <= Math.max(minia.x, minib.x); x++) {
        for (let y = Math.min(minia.y, minib.y); y <= Math.max(minia.y, minib.y); y++) {
          if (outside.has(new Point(x, y).hash())) {
            continue next;
          }
        }
      }
      bestArea = area;
    }
  }

  return bestArea;
};
