import Game from "./Game.js"
import Round from './Round.js';
import Timer from './Timer.js';
import domUpdates from './domUpdates.js';

class FastRound extends Round {
  constructor(question, surveyAnswers, game) {
    super(question, surveyAnswers, game);
    this.timer = 30; 
    this.multiplier = 2;
  }

  startTimedRound() {
    if (this.game.activePlayer === this.game.player1) {
      domUpdates.displayTimer1(this.game);
      // var timer = new Timer(this.game.activePlayer);
      // timer.runTimer();
    } else {
      domUpdates.displayTimer2(this.game);
      // var timer = new Timer(this.game);
      // timer.runTimer();
    }
  }

  setMultiplier(chosenNumber) {
    this.multiplier = chosenNumber;
  }
}

export default FastRound;