import Game from './Game.js';
import domUpdates from './domUpdates.js';


class Player {
  constructor(name, score = 0) {
    this.name = name;
    this.score = score;
  }

  solvePuzzle() {

  }
  
  getPlayerScore() {

  }

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