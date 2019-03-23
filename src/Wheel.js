import Game from './Game.js';
import data from './data.js';
import domUpdates from './domUpdates.js';

class Wheel {
  constructor(values, currentIndex) {
    this.values = [];
    this.currentIndex = [];
  }

  getRandomWheel() {
    let random = data.wheel[Math.floor(Math.random() * data.wheel.length)];
    console.log('RandomWheelTest: ', random);

    }

  getWheelValue() {

    //clean data to grab wheel values
  }

}

export default Wheel;