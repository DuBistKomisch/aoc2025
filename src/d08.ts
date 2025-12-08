const StaticDisjointSet = require('mnemonist/static-disjoint-set');

export function p1(input: string, top: number = 1000) {
  const points = buildPoints(input);
  const dists = buildDists(points);

  const sets = new StaticDisjointSet(points.length);
  for (let i = 0; i < top; i++) {
    const [_, a, b] = dists[i];
    sets.union(a, b);
  }

  return sets.compile()
    .map(set => set.length)
    .sort((a, b) => b - a)
    .slice(0, 3)
    .reduce((acc, n) => acc * n, 1);
};

export function p2(input: string) {
  const points = buildPoints(input);
  const dists = buildDists(points);

  const sets = new StaticDisjointSet(points.length);
  let i = 0;
  while (sets.dimension > 1) {
    const [_, a, b] = dists[i];
    sets.union(a, b);
    i++;
  }

  const [_, a, b] = dists[i - 1];
  return points[a][0] * points[b][0];
};

const buildPoints = (input: string) => {
  return input.trim().split('\n')
    .map(line => line.split(',').map(n => parseInt(n, 10)));
};

const buildDists = (points: number[][]) => {
  const dists = [];
  for (let i = 0; i < points.length; i++) {
    for (let j = i + 1; j < points.length; j++) {
      const [ax, ay, az] = points[i];
      const [bx, by, bz] = points[j];
      const dist = Math.pow(ax - bx, 2) + Math.pow(ay - by, 2) + Math.pow(az - bz, 2);
      dists.push([dist, i, j]);
    }
  }
  dists.sort(([distA], [distB]) => distA - distB);
  return dists;
};
