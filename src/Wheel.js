import data from "./data.js";


class Wheel {
  constructor() {
    this.values = data.wheel;
    this.currentSpin = null;
    this.currentIndex = null;
  }

  makeWheelVals() {
    let wheelData = this.values;
  }

  spinWinner(index) {
    this.currentSpin = this.values[index];
  }


}

export default Wheel;