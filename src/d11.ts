export function p1(input: string) {
  const edges = new Map();
  const reverse = new Map();
  const lines = input.trim().split('\n');
  for (const line of lines) {
    const parts = line.split(': ');
    const from = parts[0];
    const tos = parts[1].split(' ');
    edges.set(from, tos);
    for (const to of tos) {
      reverse.getOrInsert(to, []).push(from);
    }
  }
  console.log(edges);
  console.log(reverse);
  const paths = new Map();
  paths.set('you', 1);
  let queue = edges.get('you');
  while (queue.length > 0) {
    const nextQueue = [];
    for (const node of queue) {
      paths.set(node, reverse.getOrInsert(node, [])
        .reduce((acc, prev) => acc + paths.getOrInsert(prev, 0), 0))
      nextQueue.push(...edges.getOrInsert(node, []));
    }
    queue = nextQueue;
  }
  console.log(paths);
  return paths.get('out');
};

export function p2(input: string) {
  return 0;
};
