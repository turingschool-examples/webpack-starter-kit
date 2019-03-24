import domUpdates from './domUpdates.js';
import data from './data-set.js';

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    // this.iD = 0;
  }

  increaseScore(result) {
    let points = data.clues.reduce((acc, currentClue) => {
      if (result === currentClue.answer) {
        acc += currentClue.pointValue;
      }
      return acc;
    }, 0);
    this.score += points;
    console.log(this.score);
  }

  decreaseScore(result) {
    let points = data.clues.reduce((acc, currentClue) => {
      if (result === currentClue.answer) {
        acc += currentClue.pointValue;
      }
      return acc;
    }, 0);
    this.score -= points;
  }
}

export default Player;