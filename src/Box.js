import domUpdates from './domUpdates';

class Box {
  constructor(height = 50, width = 40) {
    this.height = height;
    this.width = width;
  }
  area() {
    return this.height * this.width;
  }
  increaseHeight(value) {
    this.height += value;
    domUpdates.displayHeight(this.height);
  }
}
export default Box;
//OR you could put "export default" before the class declaration