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
    return currWheelSlices;
  }
}

export default Wheel;