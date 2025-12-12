import { expect, test } from 'bun:test';
import { p1, p2 } from './d11';

test('p1', () => {
  const input = `aaa: you hhh
you: bbb ccc
bbb: ddd eee
ccc: ddd eee fff
ddd: ggg
eee: out
fff: out
ggg: out
hhh: ccc fff iii
iii: out
`;
  expect(p1(input)).toBe(5);
});

test('p2', () => {
  const input = `svr: aaa bbb
aaa: fft
fft: ccc
bbb: tty
tty: ccc
ccc: ddd eee
ddd: hub
hub: fff
eee: dac
dac: fff
fff: ggg hhh
ggg: out
hhh: out
`;
  expect(p2(input)).toBe(2);
});
