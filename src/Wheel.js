import data from './Data.js';
import Game from './Game.js';


class Wheel {
  constructor(values = [], roundValue) {
    this.values = values,
    this.roundValue = []
  }

  // populateWheel(wheelValues) {
  //   this.values = wheelValues
  //   this.singleWheelValue(wheelValues)
  //   console.log(this.values)
  //   console.log(this.roundValue);
  // }

  //a player selected value
  singleWheelValue(wheelValues) {
    let sixVals = wheelValues.slice(0, 6)
    this.roundValue = sixVals;
  }
}

export default Wheel;