import Round from './Round.js';
import $ from 'jquery';

class FinalRound extends Round {
  constructor(survey, answers) {
    super(survey, answers);
    this.multiplier = 1;
    this.timer = 0;
  }

  getMultiplier(n) {
    this.multiplier = n;
  }

  startTimer(display) {
    var timer = 30, seconds;
    setInterval(function () {
      seconds = parseInt(timer % 60, 10);
      seconds = timer < 10 ? "0" + seconds : seconds;

      display.text(seconds);

      if (--timer < 0) {
        timer = duration;
      }
    }, 1000);
  }

  addTotalScore() {

  }

  declareWinner() {

  }
}

export default FinalRound;