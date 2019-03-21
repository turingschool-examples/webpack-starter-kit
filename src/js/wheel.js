import data from './data';
import Game from './game';

class Wheel {
  constructor() {
    this.currentValue = 0;
    this.values = [];
    this.currentQuestion = {};
  }

  randomizeValues(array) {
    return array.sort(() => 0.5 - Math.random());
  }
}

export default Wheel;