import data from './data.js';
import Player from './Player.js';

class Wheel {
  constructor() {
      this.wheelElements = [];
      this.currentSpin = null;
      this.currentSpinIndex = null;
  }
  randomizeWheel() {
    let elementsArray =[];
    for(let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * data.wheel.length);
      elementsArray.push(data.wheel[randomIndex]);
    }
    this.wheelElements = elementsArray;
    console.log(this.wheelElements);
  }
  spinWheel(player) {
    this.currentSpinIndex = Math.floor(Math.random() * 5);
    console.log(this.wheelElements);

    this.currentSpin = this.wheelElements[this.currentSpinIndex];
    console.log(this.currentSpin);
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