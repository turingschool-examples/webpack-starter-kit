import Round from "./Round";
import FinalRound from "./FinalRound";

class Game {
  constructor(player1, player2) {
    this.player1 = player1;
    this.player2 = player2;
    this.currentRound = 0;
    this.usedSurveys = [];
    this.winner = null;
    this.player1.isTurn = true;
  }

  startNewRound(game) {
    if (this.currentRound < 2) {
      this.currentRound++;
      return new Round(game);
    } else if (this.currentRound === 2) {
      this.currentRound++;
      return new FinalRound(game); 
    }
  }

  toggleIsTurn() {
    this.player1.isTurn = !this.player1.isTurn;
    this.player2.isTurn = !this.player2.isTurn;
  }
}

export default Game;