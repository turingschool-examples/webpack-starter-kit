import data from './data.js';
import Player from './Player.js';

class Wheel {
  constructor() {
      this.wheelElements = [];
      this.currentSpin = '' //could also turn this to null;
      this.currentSpinIndex = null; //should be number
  }
  randomizeWheel() {
    for(let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * data.wheel.length);
      this.wheelElements.push(data.wheel[randomIndex]);
    } 
  }
  spinWheel() {
    this.currentSpinIndex = Math.floor(Math.random() * 5);
    this.currentSpin = this.wheelElements[this.currentSpinIndex];
    // if land on bankrupt invoke bankrupt method
    // if land on lose a turn invoke loseTurn method
  }
  bankrupt() {
    // reset player roundScore to 0
  }
  loseTurn() {
    // end player turn
    // switch to next player
  }
};

export default Wheel;