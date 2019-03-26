import data from "./data.js";
import round from "./Round.js"


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
    console.log(this.currentSpin);
  }


}

export default Wheel;