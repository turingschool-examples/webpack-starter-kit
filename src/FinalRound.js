import Round from './Round.js';

class FinalRound extends Round {
  constructor(survey, answers) {
    super(survey, answers);
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