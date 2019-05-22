// import User from './User';

class Turn {
  constructor(surveys) {
    this.guess = '';
    this.surveys = surveys;
    this.answers = [];
    this.isPlayerOneTurn = true;
    // this.users = [user1, user2];
  }

  // returnCurrentQuestion(questionID) {
    //DOM UPDATE
  //   let currentQuestion = this.survey.surveys.find(el => el.id === questionID)
  //   return currentQuestion.question
  // }

  returnCurrentAnswers(){
    return this.answers = this.surveys.answers.map(el => el.answer)
  }

  returnUserGuess(guess) {
    return this.guess = guess;
  }

  evaluateGuess(guess) {
    console.log('Answers', this.answers)
    console.log('Guess', guess)
    return this.returnCurrentAnswers().includes(guess) ? true : false
  }

  changeTurns() {
    this.isPlayerOneTurn = !this.isPlayerOneTurn;
  }

}

export default Turn;