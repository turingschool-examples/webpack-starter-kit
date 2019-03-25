import Game from './Game.js';
import domUpdates from './domUpdates.js';


class Player {
  constructor(name, roundScore = 0, totalScore = 0) {
    this.name = name;
    this.roundScore = roundScore;
    this.totalScore = totalScore;
  }

  solvePuzzle() {

  }
  
  // getPlayerScore(wheelVal) {
    //use this after we create wheel spin method
  //   this.roundScore += wheelVal;
  // }

  spinWheel() {
    
  }

  buyVowel() {
    if(this.score > 100) {
      //buy vowel becomes enabled
      //dom updates to show enabled
      //when enabled, player can enter in 1 vowel and if it's in the letter if will show up on the puzzle bank
    if(this.score <100) {
      //domUpdates display not enough cash message
      //buy vowel is still disabled

    }

    }
  }
}

export default Player;