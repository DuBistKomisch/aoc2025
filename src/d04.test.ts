import { expect, test } from 'bun:test';
import { p1, p2 } from './d04';

const input = `..@@.@@@@.
@@@.@.@.@@
@@@@@.@.@@
@.@@@@..@.
@@.@@@@.@@
.@@@@@@@.@
.@.@.@.@@@
@.@@@.@@@@
.@@@@@@@@.
@.@.@@@.@.
`;

test('p1', () => {
  expect(p1(input)).toBe(13);
});

test('p2', () => {
  expect(p2(input)).toBe(43);
});
