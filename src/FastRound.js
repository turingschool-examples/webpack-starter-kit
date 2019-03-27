import Round from './Round.js';
import domUpdates from './domUpdates.js';

class FastRound extends Round {
    constructor(question, answers, game) {
        super(question, answers, game);
        this.timer = 30;  //added 1 cus it takes a sec to show
        this.multiplier = 2;
    }

    startTimedRound(timer) {
      domUpdates.displayTimer(timer);
    }

    setMultiplier(chosenNumber) {
      this.multiplier = chosenNumber;
    }
}

export default FastRound;