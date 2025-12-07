export class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return `Point(${this.x},${this.y})`;
  }

  hash() {
    return `${this.x},${this.y}`;
  }

  northwest() {
    return new Point(this.x - 1, this.y - 1);
  }

  north() {
    return new Point(this.x, this.y - 1);
  }

  northeast() {
    return new Point(this.x + 1, this.y - 1);
  }

  east() {
    return new Point(this.x + 1, this.y);
  }

  southeast() {
    return new Point(this.x + 1, this.y + 1);
  }

  south() {
    return new Point(this.x, this.y + 1);
  }

  southwest() {
    return new Point(this.x - 1, this.y + 1);
  }

  west() {
    return new Point(this.x - 1, this.y);
  }
}
