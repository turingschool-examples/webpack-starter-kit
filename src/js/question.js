import domUpdates from './domUpdates';

class Question {
  constructor(answer, ansLength, splitAns, description, category) {
    // this.question = question;
    this.answer = answer;
    this.ansLength = ansLength;
    this.ansSplit = splitAns;
    this.description = description;
    this.category = category;
  }

  splitAnswer() {
    this.ansSplit = this.answer.split('');
  }

  static validateAnswer(playerGuess, answer) {
    if (playerGuess.toUpperCase() === answer.toUpperCase()) {
      console.log('correct!')
      // add to players score
      // alert player was correct
      // change round, instantiate new round with new question
    } else {
      console.log('incorrect!')
    }
  }

}

export default Question;