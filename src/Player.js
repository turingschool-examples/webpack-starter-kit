import domUpdates from './domUpdates.js';
import Puzzle from './Puzzle.js';
import Wheel from './Wheel.js';

class Player {
  constructor(name, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }

  solvePuzzle(game) {
    let solveInput = domUpdates.grabAnswerInput(this);
    let answer = game.currentPuzzle.answer.toUpperCase();
    if (solveInput === answer) {
      domUpdates.displayWinMessage();
      this.getPlayerScore(game);
    } else {
      //add a message that indicates they got it wrong, too.
        game.switchPlayers();
      }
  }

  getPlayerScore(game) {
    game.currentPlayer.roundScore += game.currentPrize;
    domUpdates.displayScore(game);
  }

  // buyVowel() {
  //   if(this.score > 100) {
  //     buy vowel becomes enabled
  //     dom updates to show enabled
  //     game.currentPlayer = this.totalScore - 100
  //     when enabled, player can enter in 1 vowel and if it's in the letter if will show up on the puzzle bank
  //   if(this.score <100) {
  //     domUpdates display not enough cash message
  //     buy vowel is still disabled
  //   }
  //   }
}


export default Player;