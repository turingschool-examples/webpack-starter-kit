import domUpdates from './domUpdates.js';

class Player {
    constructor(name, player) {
        this.name = name;
        this.score = 0;
        this.player = player;
    }

    increaseScore(points, multiplier = 1) {
      this.score += points * multiplier;
      if (this.player === 1) {
        domUpdates.displayPlayer1Score(this.score);
      } else {
        domUpdates.displayPlayer2Score(this.score);
      }
    }

}

export default Player;