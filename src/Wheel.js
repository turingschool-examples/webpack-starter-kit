import data from "./data.js";
// import round from "./Round.js"
// import Player from "./Player.js";
import domUpdates from "./domUpdates.js"



class Wheel {
  constructor() {
    this.values = data.wheel;
    this.currentSpin = null;
    this.currentIndex = null;
  }

  getSpinVal() {
    return Math.round(Math.random() * 21);
  }
  //TODO: CHOOSE A LETTER PROMPT MESSAGE
  spinWinner(game) {
    this.currentSpin = this.values[this.getSpinVal()];
    if (this.currentSpin === 'BANKRUPT') {
      game.round.updatePlayerScore(0);
      domUpdates.displayScore(game.round.activePlayer, 0);
      setTimeout(game.round.newTurn, 2500);
    } else if (this.currentSpin === 'LOSE A TURN') {
      // alert('You spun LOSE A TURN :(');
      setTimeout(game.round.newTurn, 2500);
      // game.round.newTurn();
    } 
    domUpdates.spinResultMessage(this.currentSpin);
    
  }
    
}

export default Wheel;