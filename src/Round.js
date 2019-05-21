import domUpdates from './domUpdates';
import Game from './Game';
import User from './User';

class Round {
  constructor(survey) {
    this.survey = survey;
    this.guess = "";
    this.answers = [];
    this.isPlayerOneTurn = true;
    // this.answers = this.returnCurrentAnswers(questionID);
  }

  returnCurrentQuestion(questionID) {
    let currentQuestion = this.survey.surveys.find(el => el.id === questionID)
    return currentQuestion.question
  }

  returnCurrentAnswers(){
    return this.answers = this.survey.answers.map(el => el.answer)
  }
  
  // selectSurvey() here or in game?
  
  changeTurns() {
    this.isPlayerOneTurn = !this.isPlayerOneTurn;
    }

  returnGuess(guess) {
    return this.guess = guess;
  }
  
  evaluateGuess(guess) {
    return this.answers.includes(guess) ? true : false
  }

  returnRemainingAnswers(questionID, answer) {
    if (this.evaluateGuess(questionID, answer) === true) {
      
    } 
  }
  
  evaluateIfChangeTurnsNeeded(questionID, answer) {
    if (this.evaluateGuess(questionID, answer) === false) {
      this.changeTurns();
    } 
  }



  finishRoundMessage() {
}

}

export default Round;