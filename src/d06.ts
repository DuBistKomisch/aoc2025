export function p1(input: string) {
  const grid = input.trim().split('\n')
    .map(line => line.trim().split(/\s+/));
  let total = 0;
  for (let i = 0; i < grid[0].length; i++) {
    const op = grid[grid.length - 1][i];
    if (op === '*') {
      let product = 1;
      for (let j = 0; j < grid.length - 1; j++) {
        product *= parseInt(grid[j][i], 10);
      }
      total += product;
    } else {
      let sum = 0;
      for (let j = 0; j < grid.length - 1; j++) {
        sum += parseInt(grid[j][i], 10);
      }
      total += sum;
    }
  }
  return total;
};

export function p2(input: string) {
  const grid = input.trim().split('\n');
  let total = 0;
  let op = null;
  let working = 0;
  for (let i = 0; i < grid[0].length; i++) {
    if (!op) {
      op = grid[grid.length - 1][i];
      working = op === '*' ? 1 : 0;
    }
    let column = '';
    for (let y = 0; y < grid.length - 1; y++) {
      column += grid[y][i];
    }
    column = column.trim();
    if (column.length === 0) {
      op = null;
      total += working;
      continue;
    }
    const n = parseInt(column, 10);
    if (op === '*') {
      working *= n;
    } else {
      working += n;
    }
  };
  total += working;
  return total;
};
