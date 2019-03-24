import Round from './Round'
import Data from './Data'

class Wheel {
  constructor() {
    this.wheelValue = []
    this.selectedValue = 0
  }

  createWheel() {
    console.log(Data.wheel)
    for (let i = 0; i < 6; i++) {
      this.wheelValue.push(Data.wheel[Math.floor(Math.random() * 21)])
    }
    console.log(this.wheelValue)
  }
  
  spinWheel(){
    this.selectedValue = this.wheelValue[Math.floor(Math.random() * 5)]
  console.log(this.selectedValue)
  }
}

export default Wheel