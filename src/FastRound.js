import Game from "./Game.js"
import Round from './Round.js';
import domUpdates from './domUpdates.js';

class FastRound extends Round {
  constructor(question, surveyAnswers, game) {
    super(question, surveyAnswers, game);
    this.timer = 30; 
    this.multiplier = 2;
  }

  startTimedRound() {
    if (this.game.activePlayer === this.game.player1) {
      domUpdates.displayTimer1();
    } else {
      domUpdates.displayTimer2();
    }
  }

  setMultiplier(chosenNumber) {
    this.multiplier = chosenNumber;
  }
}

export default FastRound;