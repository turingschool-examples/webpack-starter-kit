import Game from "./Game.js"
import Round from './Round.js';
import Player from './Player.js';
import domUpdates from './domUpdates.js';

class Timer {
  constructor(currPlayer, seconds = 30) {
    this.currPlayer = currPlayer;
    this.seconds = seconds;
    this.timer = setInterval(this.runTimer, 1000);
  }

  runTimer() {
    if (this.currPlayer.player === 1) {
      domUpdates.decrementTimer(".timer-1", this.seconds);
    } else {
      domUpdates.decrementTimer(".timer-2", this.seconds);
    }
  }

  stopTimer() {
    clearInterval(this.timer)
  }
}

export default Timer;