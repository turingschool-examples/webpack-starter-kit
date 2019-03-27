import Game from './Game.js';
import data from './data.js';
import domUpdates from './domUpdates.js';
// import Player from './Player.js';

class Wheel {
  constructor() {
    this.values = [];
    this.currentIndex = [];
  }

  getRandomWheel(player, game) {
    let random = data.wheel[Math.floor(Math.random() * data.wheel.length)];
    console.log('random wheel value: ', random);
    this.currentIndex = random;
    console.log('curr wheel spin:', this.currentIndex)
    if (random === 'LOSE A TURN') {
      domUpdates.displayLoseTurn(this);
      // iterates to next player
    }
    if (this.currentIndex === 'BANKRUPT') {
        // iterates to next player
        // player.roundScore === 0;
        domUpdates.displayBankrupt();
        game.switchPlayers();
      } 
      else {
        // display currentIndex wheel value
        domUpdates.displayWheelValue(this);
      }
      return this.currentIndex;
      }


      
      // this.currentIndex.push(random);
  // getWheelValue() {

  //   //clean data to grab wheel values
  // }

}

export default Wheel;