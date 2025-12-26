import { expect, test } from 'bun:test';
import { p1, p2 } from './d12';

const input = `0:
###
##.
##.

1:
###
##.
.##

2:
.##
###
##.

3:
##.
###
##.

4:
###
#..
###

5:
###
.#.
###

4x4: 0 0 0 0 2 0
12x5: 1 0 1 0 2 2
12x5: 1 0 1 0 3 2
`;

test('p1', () => {
  expect(p1(input)).toBe(2);
});

test('p2', () => {
  expect(p2(input)).toBe(0);
});
