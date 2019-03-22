import dataSet from './dataSet.js'

class Game {
  constructor(question, pointValue, answer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId;
    this.playerGuess = '';
    this.wager = pointValue;
    this.dailyD = false;
  }

  addPoints() {

  }

  chooseWager() {
 // player input that is >= 5 && <= playerDollarAmount || <= pointValue
  }
}

export default Game;
