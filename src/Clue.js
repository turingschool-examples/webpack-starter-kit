import game from './index.js';

class Clue {
  constructor(question, pointValue, answer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId;
  }

  correctAnswer(input) {
    if (input === this.answer) {
      game.currentPlayer.changeScore(this.pointValue)
    }

  }

  // removeClue() {

  // }
}

export default Clue;