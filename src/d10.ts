export function p1(input: string) {
  const lines = input.trim().split('\n');
  let answer = 0;
  for (const line of lines) {
    const parts = line.split(' ');
    const target = indicesToBinary(
      parts[0].substring(1, parts[0].length - 1) .split('')
      .flatMap((char, index) => char == '#' ? index : [])
    );
    const buttons = parts.slice(1, -1)
      .map(button => indicesToBinary(
        button.substring(1, button.length - 1).split(',')
          .map(index => parseInt(index, 10))
      ));
    const max = 1 << buttons.length;
    let least = Number.MAX_VALUE;
    for (let i = 0; i < max; i++) {
      let pressed = 0;
      let attempt = 0;
      for (let j = 0; j < buttons.length; j++) {
        if ((i & 1 << j) > 0) {
          pressed++;
          attempt ^= buttons[j];
        }
      }
      if (attempt === target && pressed < least) {
        least = pressed;
      }
    }
    answer += least;
  }
  return answer;
};

export function p2(input: string) {
  return 0;
};

const indicesToBinary = (indices: number[]) => {
  return indices.reduce((acc, n) => acc + (1 << n), 0);
}
