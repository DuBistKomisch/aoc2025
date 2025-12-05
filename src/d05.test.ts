import { expect, test } from 'bun:test';
import { p1, p2 } from './d05';

const input = `3-5
10-14
16-20
12-18

1
5
8
11
17
32
`;

test('p1', () => {
  expect(p1(input)).toBe(3);
});

test('p2', () => {
  expect(p2(input)).toBe(14);
});
