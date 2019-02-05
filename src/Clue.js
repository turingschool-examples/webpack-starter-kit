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
    } else {
      game.currentPlayer.changeScore(-Math.abs(this.pointValue), game);
    }

  }

  // removeClue() {

  // }
}

export default Clue;