import Round from './Round'
import Data from './Data'

class Wheel {
  constructor() {
    this.wheelValue = []
  }

  createWheel() {
    console.log(Data.wheel)
    for (let i = 0; i < 6; i++) {
      this.wheelValue.push(Data.wheel[Math.floor(Math.random() * 21)])
    }
    console.log(this.wheelValue)

  }
  
}

export default Wheel