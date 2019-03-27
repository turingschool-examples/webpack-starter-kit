import data from "./data.js";
import round from "./Round.js"
import Player from "./Player.js";
import domUpdates from "./domUpdates.js"



class Wheel {
  constructor() {
    this.values = data.wheel;
    this.currentSpin = null;
    this.currentIndex = null;
  }


  //TODO: CHOOSE A LETTER PROMPT MESSAGE
  spinWinner(index, round) {
    this.currentSpin = this.values[index];
    if (this.currentSpin === 'BANKRUPT') {
      round.updatePlayerScore(0);
      domUpdates.displayScore(round.activePlayer, 0);
      round.newTurn();
    } else if (this.currentSpin === 'LOSE A TURN') {
      alert('You spun LOSE A TURN :(');
      round.newTurn();
    } else {
      domUpdates.spinResultMessage(this.currentSpin);
    }
  }
    
}

export default Wheel;