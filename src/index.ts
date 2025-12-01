import { text } from 'node:stream/consumers';

const run = (supplier) => {
  const start = performance.now();
  const output = supplier();
  const end = performance.now();
  console.log(output);
  console.log(`${(end - start).toFixed(2)}ms`);
};

const input = await text(process.stdin);
const { p1, p2 } = await import('./' + process.argv[2]);
console.log('Part 1:');
run(() => p1(input));
console.log('Part 2:');
run(() => p2(input));
