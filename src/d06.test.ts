import { expect, test } from 'bun:test';
import { p1, p2 } from './d06';

const input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  
`;

test('p1', () => {
  expect(p1(input)).toBe(4277556);
});

test('p2', () => {
  expect(p2(input)).toBe(3263827);
});
