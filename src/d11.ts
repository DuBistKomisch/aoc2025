export function p1(input: string) {
  const [edges, reverse] = buildEdges(input);
  return countPaths(edges, reverse, 'you', 'out');
};

export function p2(input: string) {
  const [edges, reverse] = buildEdges(input);
  const svr2fft = countPaths(edges, reverse, 'svr', 'fft', ['dac']);
  const fft2dac = countPaths(edges, reverse, 'fft', 'dac');
  const dac2out = countPaths(edges, reverse, 'dac', 'out', ['fft'])
  const svr2dac = countPaths(edges, reverse, 'svr', 'dac', ['fft'])
  const dac2fft = countPaths(edges, reverse, 'dac', 'fft')
  const fft2out = countPaths(edges, reverse, 'fft', 'out', ['dac'])
  return svr2fft * fft2dac * dac2out + svr2dac * dac2fft * fft2out;
};

const buildEdges = (input: string) => {
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
  return [edges, reverse];
};

const countPaths = (
  edges: Map<string, string[]>,
  reverse: Map<string, string[]>,
  from: string, to: string,
  except: string[] = []
) => {
  const paths = new Map();
  paths.set(from, 1);
  let queue = edges.get(from);
  while (queue.length > 0) {
    const nextQueue = [];
    for (const node of queue) {
      const updatedPaths = reverse.getOrInsert(node, [])
        .reduce((acc, prev) => acc + paths.getOrInsert(prev, 0), 0);
      if (updatedPaths === paths.get(node)) {
        continue;
      }
      paths.set(node, updatedPaths);
      nextQueue.push(...edges.getOrInsert(node, [])
        .filter(edge => !except.includes(edge)));
    }
    queue = nextQueue;
  }
  return paths.getOrInsert(to, 0);
};
