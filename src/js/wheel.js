import data from './data';
import domUpdates from './domUpdates';

class Wheel {
  constructor() {
    this.currentValue = 0;
    this.values = [];
    this.currentQuestion = {};
  }
  
  spin() { 
    this.values.push(...this.randomizeValues(data.wheel).slice(0, 6));
    domUpdates.loadPossiblePrizes(this.values);
    this.currentValue = this.randomizeValues(this.values).pop();
    domUpdates.revealPrize(this.currentValue);
    return this.currentValue;
  }

  randomizeValues(array) {
    return array.sort(() => 0.5 - Math.random());
  }
}

export default Wheel;