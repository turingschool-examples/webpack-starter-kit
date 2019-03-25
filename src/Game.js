import dataSet from './dataSet.js'
import Player from './Player.js'
import Rounds from  './Rounds.js'

class Game {
  constructor(name1, name2, name3) {
    this.p1 = new Player(name1, 1);
    this.p2 = new Player(name2, 2);
    this.p3 = new Player(name3, 3);

    // Round counter
    this.roundCounter = 1;

    // playerTurn will only be only 1, 2, or 3
    this.playerTurn = 1;

    //counter for when to fire nextRound method (after 16, when all clues have been )
    this.roundTurn = 1;

    // Category Numbers for Rounds
    this.round1Categories = [1,2,4,6];
    this.round2Categories = [3,7,8,9];
    this.round3Categories = [10];

    // Create round 1
    this.currentRound = new Rounds(this.round1Categories);
    this.currentRound.fetchClues(this.round1Categories);
  }

  nextRound() {
    this.counter++
    if (counter == 2) {
       this.round = new Round(this.round2Categories);
    } else {
      this.round = new Round(this.round3Categories);
    }
  }
  // nextRound() {
  //   this.counter++
  //   if (counter == 2) {
  //      this.round = new Round(this.round2Categories);
  //   } else {
  //     this.round = new Round(this.round3Categories);
  //   }
  // }

  chooseWager() {
 // player input that is >= 5 && <= playerDollarAmount || <= pointValue
  }
}

export default Game;
