import { sum } from './util';

export function p1(input: string) {
  return input.trim().split('\n')
    .map(line => maxDigits(line, 2))
    .reduce(sum, 0);
};

export function p2(input: string) {
  return input.trim().split('\n')
    .map(line => maxDigits(line, 12))
    .reduce(sum, 0);
};

const maxDigits = (str: string, n: number): number => {
  let lastIndex = -1;
  let digits = '';
  for (let i = 0; i < n; i++) {
    lastIndex += maxIndex(str.substring(lastIndex + 1, str.length - (n - i - 1))) + 1;
    digits += str.charAt(lastIndex);
  }
  return parseInt(digits, 10);
}

const maxIndex = (str: string): number => {
  let max = str.charAt(0);
  let index = 0;
  for (let i = 1; i < str.length; i++) {
    const char = str.charAt(i);
    if (char > max) {
      max = char;
      index = i;
    }
  }
  return index;
};
