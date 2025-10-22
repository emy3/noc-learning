function setup() {
  createCanvas(640, 640);

  walker = new walker();
  background(255);
}

function draw() {
  walker.step();
  walker.show();
}

class walker {
  constructor() {
    this.x = width / 2;
    this.y = height / 2;
  }

  show() {
    stroke(0)
    point(this.x, this.y)
  }

  step() {
    let choice = floor(random(4));
    if (choice === 0) {
      this.x++;
    } else if (choice === 1) {
      this.x--;
    } else if (choice === 2) {
      this.y++;
    } else {
      this.y--;
    }
  }
}