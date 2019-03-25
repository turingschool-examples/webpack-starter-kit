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
    // if (this.random === 'LOSE A TURN') {
    //   domUpdates.displayLoseTurn();
    //iterates to next player
    // }
    // if (this.random === 'BANKRUPT') {
      //iterates to next player
      // this.player score = 0
    //   domUpdates.diplayBankrupt()
    // } else {
      //display random wheel value
      //domUpdates.displayWheel
      //}
    }

  getWheelValue() {

    //clean data to grab wheel values
  }

}

export default Wheel;