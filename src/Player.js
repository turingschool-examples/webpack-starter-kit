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
    if (game.roundCounter === 1) {
      let points = data.clues.reduce((acc, currentClue) => {
        if (answer === currentClue.answer) {
          acc += currentClue.pointValue;
        }
        return acc;
      }, 0);
    this.score += points;
    }
    if (game.roundCounter === 2) {
      let points = data.clues.reduce((acc, currentClue) => {
        if (answer === currentClue.answer) {
          acc += currentClue.pointValue;
        }
        return acc;
      }, 0);
    this.score += points * 2;
  }
}

  decreaseScore(answer, game) {
    if (game.roundCounter === 1) {
      let points = data.clues.reduce((acc, currentClue) => {
        if (answer === currentClue.answer) {
          acc += currentClue.pointValue;
        }
        return acc;
      }, 0);
    this.score -= points;
    }
    if (game.roundCounter === 2) {
      let points = data.clues.reduce((acc, currentClue) => {
        if (answer === currentClue.answer) {
          acc += currentClue.pointValue;
        }
        return acc;
      }, 0);
    this.score -= points * 2;
    }
  }
}

export default Player;