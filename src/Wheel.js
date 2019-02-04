import domUpdates from './domUpdates.js';

class Wheel {
  constructor(wheelObj) {
    this.wheel = wheelObj;
  }

  spin() {
    const spinValue = this.wheel[Math.floor(Math.random() * this.wheel.length)];
    domUpdates.valueMessage(spinValue);
    domUpdates.bankruptOrLoseATurnMessage();
    return spinValue;
  }


}

export default Wheel; 