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
    console.log(answer, solveInput)
    if (solveInput === answer) {
      console.log('SolveInput', solveInput)
      domUpdates.displayWinMessage();
      this.getPlayerScore(game, Wheel);
    } else {
      //below is not moving to the next player, might want to add a message that indicates they got it wrong, too.
        game.switchPlayers();
      }
  }

  getPlayerScore(game) {
    console.log('player:prize:', game.currentPrize)
    game.currentPlayer.roundScore += game.currentPrize;
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