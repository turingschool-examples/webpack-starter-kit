import data from './data.js';
import domUpdates from './domUpdates.js';

class Wheel {
  constructor() {
    this.wheelElements = [];
    this.currentSpin = null;
    this.currentSpinIndex = null;
  }
  randomizeWheel() {
    let elementsArray = [];
    for (let i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * data.wheel.length);
      elementsArray.push(data.wheel[randomIndex]);
    }
    this.wheelElements = elementsArray;
  }
  spinWheel() {
    this.currentSpinIndex = Math.floor(Math.random() * 6);
    this.currentSpin = this.wheelElements[this.currentSpinIndex];
    domUpdates.displayElement(this.currentSpin);
    if (typeof parseInt(this.currentSpin) === 'number') {
      domUpdates.toggleKeyboard();
      domUpdates.toggleKeyboard();
    }
  }
}

export default Wheel;