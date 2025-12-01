import { text } from 'node:stream/consumers';

const input = await text(process.stdin);
const { p1, p2 } = await import('./' + process.argv[2]);
console.log('Part 1:');
console.log(p1(input));
console.log('Part 2:');
console.log(p2(input));
