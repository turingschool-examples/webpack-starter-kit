import domUpdates from './domUpdates.js'
import Gameboard from './gameboard.js'

class Clue {
  constructor(answer, categoryId, categoryName, pointValue, question) {
    this.answer = answer;
    this.categoryId = categoryId;
    this.categoryName = categoryName;
    this.pointValue = pointValue;
    this.question = question;
  }

  showClue(selectedClue) {
    console.log("houston we have a clue");
    console.log(selectedClue.question);
    domUpdates.populateClueCard(selectedClue);
  }

  checkAnswer(game, selectedClue, playerAnswer) {
    console.log(selectedClue.answer);
    if (selectedClue.answer.toLowerCase() === playerAnswer.toLowerCase()) {
      domUpdates.correctFeedback();
      let answer = "correct";
      game.updateScore(answer, selectedClue.pointValue);
    } else {
      domUpdates.incorrectFeedback();
      let answer = "wrong";
      game.updateScore(answer, selectedClue.pointValue);
    }
  }
}



export default Clue;