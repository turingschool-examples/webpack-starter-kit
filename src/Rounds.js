import Game from './Game.js'
import dataSet from './dataSet.js'

class Rounds extends Game {
  constructor(question, pointValue, answer, categoryId, dailyD, playerName, playerDollarAmount) {
    super(question, pointValue, answer, categoryId, dailyD);
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId;
    this.dailyD = dailyD;
    this.playerName = playerName;
    this.playerDollarAmount = 0 || playerDollarAmount;
  }

   checkAnswer() {
     //this.playerguess = playerinput.value
     // boolean of this.answer === this.playerguess
   }

   addPoints(boolean) {

   }
}

export default Rounds;
