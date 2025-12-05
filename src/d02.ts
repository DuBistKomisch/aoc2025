import { sum } from './util';

export function p1(input: string) {
  const ranges = input.trim().split(',');
  const invalid = new Set();
  for (const range of ranges) {
    const [a, b] = range.split('-');
    if (a.length !== b.length) {
      find(invalid, a, '9'.repeat(a.length), 2);
      find(invalid, '1' + '0'.repeat(b.length - 1), b, 2);
    } else {
      find(invalid, a, b, 2);
    }
  }
  return sumSet(invalid);
};

export function p2(input: string) {
  const ranges = input.trim().split(',');
  const invalid = new Set();
  for (const range of ranges) {
    const [a, b] = range.split('-');
    if (a.length !== b.length) {
      segments(invalid, a, '9'.repeat(a.length));
      segments(invalid, '1' + '0'.repeat(b.length - 1), b);
    } else {
      segments(invalid, a, b);
    }
  }
  return sumSet(invalid);
};

const segments = (invalid, a, b) => {
  for (let n = 2; n <= a.length; n++) {
    find(invalid, a, b, n);
  }
};

const find = (invalid, a, b, segments) => {
  if (a.length % segments !== 0) {
    return;
  }
  const first = parseInt(a.substring(0, a.length / segments), 10);
  const last = parseInt(b.substring(0, b.length / segments), 10);
  for (let i = first; i <= last; i++) {
    const candidate = String(i).repeat(segments);
    if (candidate >= a && candidate <= b) {
      invalid.add(parseInt(candidate, 10));
    }
  }
};

const sumSet = (set) => {
  return Array.from(set).reduce(sum, 0);
};
