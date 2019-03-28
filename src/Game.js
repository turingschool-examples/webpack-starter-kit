import dataSet from './dataSet.js';
import $ from 'jquery'
import Player from './Player.js';
import Rounds from  './Rounds.js';
import Clue from './Clue.js';
import domUpdates from './domUpdates.js';

class Game {
  constructor(name1, name2, name3) {
    this.p1 = new Player(name1, 1);
    this.p2 = new Player(name2, 2);
    this.p3 = new Player(name3, 3);
    this.playerList = [];
    this.playerList.push(this.p1, this.p2, this.p3);
    this.currentPlayerNumber = 1;
    this.activePlayer = this.playerList[0];
    this.currentClue = null;
    this.cluesRemaining = 16;
    this.playerAnswer = '';
    this.roundCounter = 1;
    this.turnCount = 1;
    this.round1Categories = [1,2,4,6];
    this.round2Categories = [3,7,8,9];
    this.round3Categories = [10];
    this.currentRound = new Rounds(this.round1Categories);
    this.currentRound.fetchClues();
  }

  checkAnswer(userAnswer) {
    this.playerAnswer = userAnswer;
    if (this.playerAnswer.toLowerCase() === this.currentClue.answer.toLowerCase()) {
      this.playerList[this.currentPlayerNumber].playerDollarAmount += this.currentClue.pointValue;
      // domUpdates.updateScore(this.playerList[this.currentPlayerNumber], [this.currentPlayerNumber])

      console.log('true', this.playerList[this.currentPlayerNumber].playerDollarAmount);
    } else {
      console.log('false', this.playerList[this.currentPlayerNumber].playerDollarAmount -= this.currentClue.pointValue); this.playerList[this.currentPlayerNumber].playerDollarAmount -= this.currentClue.pointValue;
      // domUpdates.updateScore(this.playerList[this.currentPlayerNumber], [this.currentPlayerNumber])
    }
  }

  nextRound() {
    if (this.cluesRemaining === 0) {
       this.currentRound = new Round(this.round2Categories);
    } else {
      this.roundCounter = new Round(this.round3Categories);
    }
  }

  findClueIndex (category, e) {
    if ($(e.target).is(".ind-0")) {
      this.currentClue = new Clue (category[0]);
      console.log(this.currentClue);
   } else if ($(e.target).is(".ind-1")) {
     this.currentClue = new Clue (category[1]);
     console.log(this.currentClue);
   } else if ($(e.target).is(".ind-2")) {
     this.currentClue = new Clue (category[2]);
     console.log(this.currentClue);
   } else {
     this.currentClue = new Clue(category[3]);
     console.log(this.currentClue);
   }
  }

  nextPlayer() {
    this.currentPlayerNumber++
    if (this.currentPlayerNumber === 4) {
      this.currentPlayerNumber = 1;
    }
    this.activePlayer = this.playerList[this.currentPlayerNumber];
  }


  chooseWager() {
 // player input that is >= 5 && <= playerDollarAmount || <= pointValue
  }
}

export default Game;
