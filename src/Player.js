import Clue from './Clue.js';
import game from './index.js';
import domUpdates from './domUpdates.js';

class Player {
  constructor(score, name) {
    this.score = score;
    this.name = name;
  }

  changeScore(points) {
    this.score += points;
    domUpdates.displayPlayerScore(game.currentPlayer)
  }


}

export default Player;