// import domUpdates from './domUpdates.js';

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
    // domUpdates.populateClueCard(selectedClue);
    // domUpdates.showClueCard();
  }

  checkAnswer() {
    
  };
}



export default Clue;