export function p1(input: string) {
  const lines = input.trim().split('\n');
  let dial = 50;
  let password = 0;
  for (const line of lines) {
    const sign = line.at(0) === 'L' ? -1 : 1;
    dial += sign * parseInt(line.substring(1), 10);
    if (dial % 100 === 0) {
      password++;
    }
  }
  return password;
};

export function p2(input: string) {
  const lines = input.trim().split('\n');
  let dial = 50;
  let password = 0;
  for (const line of lines) {
    const sign = line.at(0) === 'L' ? -1 : 1;
    const ticks = parseInt(line.substring(1), 10);
    const fulls = Math.floor(ticks / 100);
    password += fulls;
    const leftover = ticks - fulls * 100;
    const was = dial;
    dial += sign * leftover;
    if (dial <= 0 && was !== 0) {
      password++;
    }
    if (dial < 0) {
      dial += 100;
    }
    if (dial >= 100) {
      password++;
      dial -= 100;
    }
  }
  return password;
}
