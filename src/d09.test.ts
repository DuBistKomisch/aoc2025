import { expect, test } from 'bun:test';
import { p1, p2 } from './d09';

const input = `7,1
11,1
11,7
9,7
9,5
2,5
2,3
7,3
`;

test('p1', () => {
  expect(p1(input)).toBe(50);
});

test('p2', () => {
  expect(p2(input)).toBe(24);
});
