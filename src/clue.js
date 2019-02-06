import domUpdates from './domUpdates.js'

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
  }

  checkAnswer(selectedClue, $playerAnswer) {
    if (selectedClue.answer.toLowerCase() === $playerAnswer.toLowerCase()) {
      domUpdates.correctFeedback();

    } else {
      domUpdates.incorrectFeedback();

    }
  }
}



export default Clue;