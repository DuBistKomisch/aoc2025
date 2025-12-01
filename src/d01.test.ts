import { expect, test } from 'bun:test';
import { p1, p2 } from './d01';

const input = `L68
L30
R48
L5
R60
L55
L1
L99
R14
L82
`;

test('p1', () => {
  expect(p1(input)).toBe(3);
});

test('p2', () => {
  expect(p2(input)).toBe(6);
});
