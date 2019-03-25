import Round from "./Round";
import FinalRound from "./FinalRound";
import domUpdates from './domUpdates.js';

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentRound = 0;
    this.usedSurveys = [];
    this.winner = null;
    this.player1.isTurn = true;
  }

  startNewRound(round) {
    this.currentRound++;
    if (this.currentRound < 3) {
      let round = new Round(this);
      this.updateDOM(round)
      return round;
    } else if (this.currentRound === 3) {
      let round = new FinalRound(this);
      this.updateDOM(round)
      return round;
    }
  }

  updateDOM(round) {
    domUpdates.animateKnight();
    setTimeout(function () {
      domUpdates.populateSurvery(round);
      domUpdates.populateAnswers(round)
    }, 4000);
  }
  
  toggleIsTurn() {
    this.player1.isTurn = !this.player1.isTurn;
    this.player2.isTurn = !this.player2.isTurn;
    domUpdates.toggleActivePlayer(this.player1.isTurn);
  }
}

export default Game;