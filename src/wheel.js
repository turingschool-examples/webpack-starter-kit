import data from './data_wheel-of-fortune';

class Wheel {
  constructor() {
    this.wheelSlices = this.getWheelSlices()
  }
  getWheelSlices() {
    let currWheelSlices = [];
    for (let i = 0; i < 10; i++) {
      currWheelSlices.push(data.wheel[Math.floor((Math.random() * 21) + 0)]);
    }
    // shuffle(array) {
    // return array.sort(() => 0.5 - Math.random()) }
    return currWheelSlices;
  }
  // Create random num
  // run against ind of wheel
  // 6 times (pie pieces don't have to be unique)
}

export default Wheel;