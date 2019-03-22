import Round from './Round.js';

class FinalRound extends Round {
  constructor(survey, answers) {
    super(survey, answers);
    this.multiplier = 1;
  }

  getMultiplier(n) {
    this.multiplier = n;
  }

  startTimer() {
    setTimeout(this.addTotalScore, 30000);
  }

  addTotalScore() {

  }

  declareWinner() {

  }
}

export default FinalRound;