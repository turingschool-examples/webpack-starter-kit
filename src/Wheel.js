import data from './data.js';
import Player from './Player.js';

class Wheel {
  constructor() {
      this.wheelElements = [];
      this.currentSpin = null //could also turn this to null;
      this.currentSpinIndex = null; //should be number
  }
  randomizeWheel() {
    for(let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * data.wheel.length);
      this.wheelElements.push(data.wheel[randomIndex]);
    } 
  }
  spinWheel(player) {
    this.currentSpinIndex = Math.floor(Math.random() * 5);
    this.currentSpin = this.wheelElements[this.currentSpinIndex];
    return this.currentSpin;
    // if land on bankrupt invoke bankrupt method
    // if land on lose a turn invoke loseTurn method
  }
  bankrupt(player) {
    // reset player roundScore to 0
  }
  loseTurn(player) {
    // end player turn
    // switch to next player
  }
};

export default Wheel;