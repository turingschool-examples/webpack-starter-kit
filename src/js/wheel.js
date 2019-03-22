import data from './data';
import Game from './game';

class Wheel {
  constructor() {
    this.currentValue = 0;
    this.values = [];
    this.currentQuestion = {}; // should this be in the game class?
  }
  
  //should we combine this and generate prizes because we generate new prizes for each spin anyway?
  spin() { 
    this.values.push(...this.randomizeValues(data.wheel).slice(0, 6));
    return this.currentValue = this.randomizeValues(this.values).pop();
  }

  randomizeValues(array) {
    return array.sort(() => 0.5 - Math.random());
  }
}

export default Wheel;