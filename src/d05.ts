import { sum } from './util';
const StaticIntervalTree = require('mnemonist/static-interval-tree');

export function p1(input: string) {
  const [rangesInput, available] = input.trim().split('\n\n');
  const ranges = buildOptimisedRanges(input.trim().split('\n\n')[0]);
  const rangeTree = StaticIntervalTree.from(ranges);
  return available.split('\n')
    .map(n => parseInt(n, 10))
    .filter(n => rangeTree.intervalsContainingPoint(n).length > 0)
    .length;
};

export function p2(input: string) {
  const ranges = buildOptimisedRanges(input.trim().split('\n\n')[0]);
  return ranges.map(([min, max]) => max - min + 1)
    .reduce(sum, 0);
};

const buildOptimisedRanges = (input: string) => {
  const ranges = input.split('\n')
    .map(range => range.split('-').map(n => parseInt(n, 10)));
  ranges.sort(([minA, maxA], [minB, maxB]) =>
    minA === minB ? maxA - maxB : minA - minB);
  let i = 0;
  while (i < ranges.length - 1) {
    if (ranges[i + 1][0] <= ranges[i][1]) {
      if (ranges[i + 1][1] > ranges[i][1]) {
        ranges[i][1] = ranges[i + 1][1];
      }
      ranges.splice(i + 1, 1);
    } else {
      i++;
    }
  }
  return ranges;
};
