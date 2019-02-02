import data from './Data.js';
import Game from './Game.js'


class Wheel {
  constructor() {
    this.values = []

  }

  populateWheel(wheelValues) {
   this.values.push(wheelValues)
  }



  grabSixWheelValues() {
    // this.populateWheel();
    let wheelValues = this.values.splice(0, 6)
    console.log(wheelValues);
  }

}

export default Wheel;