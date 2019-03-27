import dataSet from './dataSet.js'
import $ from 'jquery'
import Player from './Player.js'
import Rounds from  './Rounds.js'
import Clue from './Clue.js'
import index from './index.js'

class Game {
  constructor(name1, name2, name3) {
    this.p1 = new Player(name1, 1);
    this.p2 = new Player(name2, 2);
    this.p3 = new Player(name3, 3);
    // playerTurn will only be only 1, 2, or 3
    this.playerTurn = [];
    this.playerTurn.push(this.p1, this.p2, this.p3);
    this.currentClue = null;

    // Round counter
    this.roundCounter = 1;
    //counter for when to fire nextRound method (after 16, when all clues have been )
    this.turnCount = 1;

    // Category Numbers for Rounds
    this.round1Categories = [1,2,4,6];
    this.round2Categories = [3,7,8,9];
    this.round3Categories = [10];

    // Create round 1
    this.currentRound = new Rounds(this.round1Categories);
    this.currentRound.fetchClues();

  }

  nextRound() {
    this.counter++
    if (counter == 2) {
       this.round = new Round(this.round2Categories);
    } else {
      this.round = new Round(this.round3Categories);
    }
  }
  findClueIndex (category, e) {
    if ($(e.target).is(".ind-0")) {
      this.currentClue = new Clue (category[0]);
     console.log(this.currentClue.pointValue);

   } else if ($(e.target).is(".ind-1")) {
     let currentClue = new Clue (category[1]);
     console.log(currentClue);
   } else if ($(e.target).is(".ind-2")) {
     let currentClue = new Clue (category[2]);
     console.log(currentClue);
   } else {
     let currentClue = new Clue(category[3]);

     console.log(currentClue);
   }
  }



  chooseWager() {
 // player input that is >= 5 && <= playerDollarAmount || <= pointValue
  }
}

export default Game;
