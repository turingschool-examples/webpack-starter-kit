
/* eslint-disable */

export default function sketch(p) {
  let stars = [];
  let speed;

  function setup() {
    createCanvas(windowWidth, 350);

    function Star() {
      this.x = random(-width, width);
      this.y = random(-height, height);
      this.z = random(width);

      this.display = function () {
        noStroke();
        fill(255);
        let sx = map(this.x / this.z, 0, 1, 0, width);
        let sy = map(this.y / this.z, 0, 1, 0, height);
        let r = map(this.z, 0, width, 3, 0);
        ellipse(sx, sy, r, r);
      } // display

      this.update = function () {
        this.z -= speed;

        if (this.z < 1) {
          this.z = width;
          this.x = random(-width, width);
          this.y = random(-height, height);
        }
      } // update
    } // Star

    for (let i = 0; i < 1000; i += 1) {
      stars[i] = new Star();
    }
  } // setup

  function draw() {
    background(0);
    translate(width / 2, height / 2);
    speed = map(mouseX, 0, width, 1, 1);
    for (let i = 0; i < stars.length; i += 1) {
      stars[i].display();
      stars[i].update();
    }
  } // draw
    // p.stars = [];
    // p.setup = function () {
    //   let i;
    //   p.createCanvas(window.innerWidth, window.innerHeight);
    //   i = 0;
    //   while (i < 1000) {
    //     if (window.CP.shouldStopExecution(0)) break;
    //     p.stars[i] = new p.Star();
    //     i++;
    //   } window.CP.exitedLoop(0);
    // };
    // p.draw = function () {
    //   let i;
    //   p.background(0);
    //   p.translate(p.width / 2, p.height / 2);
    //   i = 0;
    //   while (i < p.stars.length) {
    //     if (window.CP.shouldStopExecution(1)) break;
    //     p.stars[i].update();
    //     p.stars[i].show();
    //     i++;
    //   } window.CP.exitedLoop(1);
    // };
    // p.Star = function () {
    //   this.x = p.random(-p.width, p.width);
    //   this.y = p.random(-p.height, p.height);
    //   this.z = p.random(0, p.width);
    //   this.pz = this.z;
    //   this.update = function () {
    //     this.z = this.z - 2;
    //     if (this.z < 1) {
    //       this.z = p.width;
    //       this.x = p.random(-p.width, p.width);
    //       this.y = p.random(-p.height, p.height);
    //       this.pz = this.z;
    //     }
    //   };
    //   this.show = function () {
    //     var px, py, sx, sy;
    //     sx = p.map(this.x / this.z, 0, 1, 0, p.width);
    //     sy = p.map(this.y / this.z, 0, 1, 0, p.width);
    //     px = p.map(this.x / this.pz, 0, 1, 0, p.width);
    //     py = p.map(this.y / this.pz, 0, 1, 0, p.width);
    //     this.pz = this.z;
    //     p.stroke(255);
    //     p.line(px, py, sx, sy);
    //   };
    // };
    // return p.windowResized = function () {
    //   p.resizeCanvas(window.innerWidth, window.innerHeight);
  };










