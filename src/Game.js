import Round from "./Round";
import FinalRound from "./FinalRound";
import domUpdates from './domUpdates.js';

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.round = null;
    this.currentRound = 2;
    this.usedSurveys = [];
    this.winner = null;
    this.player1.isTurn = true;
  }

  startNewRound() {
    if (this.currentRound < 2) {
      this.currentRound++;
      this.round = new Round(this);
      this.updateDOM(this.round);
      return this.round;
    } else if (this.currentRound === 2) {
      this.currentRound++;
      this.round = new FinalRound(this);
      setTimeout(function () {
        domUpdates.hideGame();
      }, 2000);
      return this.round;
    }
  }

  updateDOM(round) {
    domUpdates.hideGuessMessages();
    domUpdates.animateKnight(this.currentRound);
    setTimeout(function () {
      domUpdates.populateSurvery(round);
      domUpdates.populateAnswers(round);
    }, 4000);
  }
  
  toggleIsTurn() {
    this.player1.isTurn = !this.player1.isTurn;
    this.player2.isTurn = !this.player2.isTurn;
    domUpdates.toggleActivePlayer(this.player1.isTurn);
  }
}

export default Game;