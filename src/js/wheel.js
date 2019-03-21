import data from './data';
class Wheel {
  constructor() {
    this.currentValue = 0;
    this.values = [];
  }

  randomizeValues(array) {
    return array.sort(() => 0.5 - Math.random());
  }
}

export default Wheel;