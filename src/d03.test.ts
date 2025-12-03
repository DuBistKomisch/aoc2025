import { expect, test } from 'bun:test';
import { p1, p2 } from './d03';

const input = `987654321111111
811111111111119
234234234234278
818181911112111
`;

test('p1', () => {
  expect(p1(input)).toBe(357);
});

test('p2', () => {
  expect(p2(input)).toBe(3121910778619);
});
