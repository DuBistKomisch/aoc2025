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
  return 0;
};
