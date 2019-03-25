import data from './data';
import Game from './game';

class Wheel {
  constructor() {
    this.currentValue = 0;
    this.values = [];
    this.currentQuestion = {}; // should this be in the game class? // raechel: i don't think we're going to need this, we can instantiate a new wheel with each spin with the logic i'm thinking of and then we can ignore the current question for the wheel since we have it stored on the game
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