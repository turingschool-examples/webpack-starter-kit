class Question {
  constructor(question, answer, category, point) {
    this.question = question;
    this.answer = answer;
    this.category = category;
    this.point = point;
  }
  newQuestion() {
    //when a player has clicked on a box on the board, we will find that box by event targeting
    // we will acquire the id of the chosen question
    // we will then make a popup appear with the question
    //
  }

  submitQuestion() {
    // upon submit button click, we will take the value of the text field and compare it with the answer from the dataset
    // we will then add or deduct points based on if the answer was correct
  }
}

export default Question;