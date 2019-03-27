import domUpdates from './domUpdates.js';
import data from './data-set.js';
import Game from './Game.js';

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    // this.iD = 0;
  }

  increaseScore(answer, game) {
    let points = game.clues.reduce((acc, currentClue) => {
      if (answer === currentClue.answer) {
        acc += currentClue.pointValue;
      }
        return acc;
      }, 0);
    this.score += points;
    }

  decreaseScore(answer, game) {
    let points = game.clues.reduce((acc, currentClue) => {
      if (answer === currentClue.answer) {
        acc += currentClue.pointValue;
      }
      return acc;
      }, 0);
    this.score -= points;

  }
}

export default Player;