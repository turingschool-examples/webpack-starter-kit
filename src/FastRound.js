import Round from './Round.js';
import domUpdates from './domUpdates.js';

class FastRound extends Round {
  constructor(question, answers) {
    super(question, answers);
    this.timer = 30;  //added 1 cus it takes a sec to show
    this.multiplier = 2;
  }

  startTimedRound() {
    if (window.game.activePlayer === window.game.player1) {
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