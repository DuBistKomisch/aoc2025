import { Point } from './point';

export const sum = (acc, n) => acc + n;

export const printGrid = (title: string, set: Set<String>, width: number, height: number) => {
  console.log(title);
  for (let j = 0; j < height; j++) {
    for (let i = 0; i < width; i++) {
      process.stdout.write(set.has(new Point(i, j).hash()) ? '#' : '.');
    }
    process.stdout.write('\n');
  }
};
