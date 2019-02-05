import domUpdates from './domUpdates.js';

class Player {
  constructor(score, name) {
    this.score = score;
    this.name = name;
  }

  changeScore(points, game) {
    this.score += points;
    domUpdates.displayPlayerScore(game.currentPlayer, game)
  }


}

export default Player;