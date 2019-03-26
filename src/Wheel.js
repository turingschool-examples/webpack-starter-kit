import Round from './Round'
import Data from './Data'
import DomUpdates from './DomUpdates';


class Wheel {
  constructor() {
    this.wheelValues = []
    this.selectedValue = 0
  }

  createWheel() {
    for (let i = 0; i < 6; i++) {
      this.wheelValues.push(Data.wheel[Math.floor(Math.random() * 21)])
    }
    console.log(this.wheelValues)
  }
  
  spinWheel(game) {
    this.selectedValue = this.wheelValues[Math.floor(Math.random() * 5)]
    console.log(this.selectedValue);
    this.displayValue(this.selectedValue);
    return game.roundInst.checkValue(this.selectedValue, game)
  }

  displayValue(wheelValue) {
    DomUpdates.displayWheelValue(wheelValue);
  }
}

export default Wheel