import data from '../data.js'
import helper from './helper.js'

class Wheel {
  constructor() {
    this.spaces = [];
    this.currentSpace = null;
  }


  createSpaces() {
    let randomMin = helper.getRandomInt(1, 17);
    let randomMax = randomMin + 6;
    this.spaces = data.wheel.slice(randomMin, randomMax);
    this.spin()
  }

  spin() {
    let randomSpace = helper.getRandomInt(0, 6)
    this.currentSpace = this.spaces[randomSpace]
    // console.log(this.currentSpace)
  }

  //reset() {
  //resets your random spaces
  // }





  //reset wheel method here
  //changes the spaces




}
export default Wheel;