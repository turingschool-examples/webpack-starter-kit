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

  spinWinner(index, round) {
    this.currentSpin = this.values[index];

    if (this.currentSpin === 'BANKRUPT') {
      round.players[round.activePlayer].roundScore = 0;
      domUpdates.displayScore(round.activePlayer, 0);
      round.changeActivePlayers();
    } else if (this.currentSpin === 'LOSE A TURN') {
      round.changeActivePlayers();
    }
  }


}

export default Wheel;