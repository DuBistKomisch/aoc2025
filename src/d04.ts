export function p1(input: string) {
  const grid = buildGrid(input);
  return Array.from(grid.values())
    .filter(([x, y]) => isAccessible(grid, x, y))
    .length;
};

export function p2(input: string) {
  const grid = buildGrid(input);
  let removed = 0;
  let lastRemoved = 0;
  do {
    lastRemoved = removed;
    for (const [point, [x, y]] of grid.entries()) {
      if (isAccessible(grid, x, y)) {
        grid.delete(point);
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
      if (lines[y].charAt(x) === '@') {
        grid.set(`${x},${y}`, [x, y]);
      }
    }
  }
  return grid;
}

const isAccessible = (grid: Map<string>, x: number, y: number): boolean => {
  const adjacent = [
    `${x - 1},${y - 1}`,
    `${x},${y - 1}`,
    `${x + 1},${y - 1}`,
    `${x + 1},${y}`,
    `${x + 1},${y + 1}`,
    `${x},${y + 1}`,
    `${x - 1},${y + 1}`,
    `${x - 1},${y}`
  ].filter(other => grid.get(other)).length;
  return adjacent < 4;
}
