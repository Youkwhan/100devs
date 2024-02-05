// 06 The Secret Life of Objects

// 01 - A Vector Type
class Vec {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(vector) {
    let dx = this.x + vector.x;
    let dy = this.y + vector.y;
    return new Vec(dx, dy);
  }

  minus(vector) {
    let dx = this.x - vector.x;
    let dy = this.y - vector.y;
    return new Vec(dx, dy);
  }

  get length() {
    // distance from origin
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }
}

console.log(new Vec(1, 2).plus(new Vec(2, 3)));
// → Vec{x: 3, y: 5}
console.log(new Vec(1, 2).minus(new Vec(2, 3)));
// → Vec{x: -1, y: -1}
console.log(new Vec(3, 4).length);
// → 5

// 02 - GROUPS, set
class Group {
  constructor() {
    this.group = [];
  }
  add(val) {
    if (!this.group.includes(val)) {
      this.group.push(val);
    }
  }
  delete(val) {
    //O(n)
    this.group = this.group.filter((n) => n !== val);
  }
  has(val) {
    return this.group.includes(val);
  }

  static from(iterable) {
    const group = new Group();
    for (const value of iterable) {
      group.add(value);
    }
    return group;
  }
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false

// 03 ITERABLE GROUPS
