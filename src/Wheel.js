import Data from './Data'
import DomUpdates from './DomUpdates';


class Wheel {
  constructor() {
    this.wheelValues = []
    this.selectedValue = 0

  }

  createWheel() {
    if(this.wheelValues.length === 6){
      this.wheelValues.splice(0,6)

    }
    for (let i = 0; i < 6; i++) {
      this.wheelValues.unshift(Data.wheel[Math.floor(Math.random() * 21)])
    }
  }
  
  spinWheel(game) {
    this.selectedValue = this.wheelValues[Math.floor(Math.random() * 5)]
    DomUpdates.displayWheelValue(this.selectedValue);
    return game.roundInst.checkValue(this.selectedValue, game)
  }
}

export default Wheel