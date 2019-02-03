class Clue {
  constructor(question, pointValue, answer, categoryId) {
    this.question = question;
    this.pointValue = pointValue;
    this.answer = answer;
    this.categoryId = categoryId;
  }

  correctAnswer(game, input) {
    if (input === this.answer) {
      game.currentPlayer.changeScore(this.pointValue, game);
    }

  }

  // removeClue() {

  // }
}

export default Clue;