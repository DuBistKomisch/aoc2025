import { sum } from './util';

export function p1(input: string) {
  const lines = input.trim().split('\n\n').at(-1).split('\n');
  let answer = 0;
  for (const line of lines) {
    const parts = line.split(': ');
    const [width, height] = parts[0].split('x');
    const presents = parts[1].split(' ').map(n => parseInt(n, 10)).reduce(sum, 0);
    if (presents <= Math.floor(width / 3) * Math.floor(height / 3)) {
      answer++;
    }
  }
  return answer;
};

export function p2(input: string) {
  return 0;
};
