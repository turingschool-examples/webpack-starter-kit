import Round from './Round.js';
import domUpdates from './domUpdates.js';

class FastRound extends Round {
    constructor(question, answers, game) {
        super(question, answers, game);
        this.timer = 30;  //added 1 cus it takes a sec to show
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