import domUpdates from './domUpdates.js'

class Clue {
  constructor(question, pointValue, answer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId;
  }

  correctAnswer(game, input) {
    if (input.toLowerCase() === this.answer.toLowerCase()) {
      game.currentPlayer.changeScore(this.pointValue, game);
      domUpdates.hidePopUp();
    } else {
      game.currentPlayer.changeScore(-Math.abs(this.pointValue), game);
      domUpdates.changePrompt(this.answer);
      setTimeout(() => {
        domUpdates.hidePopUp();
      }, 1000);
    }
  }

  // removeClue() {

  // }
}

export default Clue;