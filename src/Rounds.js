import Game from './Game.js'
class Rounds extends Game {
  constructor(question, pointValue, answer, categoryId, dailyD) {
    super(playerName, playerDollarAmount)
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId;
    this.playerGuess = '';
    this.wager = pointValue;
    this.dailyD = dailyD || false;
  }
   checkAnswer() {
     //this.playerguess = playerinput.value
     // boolean of this.answer === this.playerguess
   }
   addPoints(boolean) {

   }
}

export default Rounds;
