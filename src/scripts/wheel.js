import data from '../data.js'

class Wheel {
  constructor() {
    this.spaces = [];
    this.currentSpace = null;
  }

  //wheel should be responsible for creating spaces

  getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min; 
  }

  createSpaces() {
    let randomMin = this.getRandomInt(1, 17);
    let randomMax = randomMin + 6;
    this.spaces = data.wheel.slice(randomMin, randomMax);
  }

  //reset() {
  //resets your random spaces
  // }





  //reset wheel method here
  //changes the spaces




}
export default Wheel;