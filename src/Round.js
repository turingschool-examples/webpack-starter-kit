import domUpdates from './domUpdates';
import Game from './Game'

class Round {
  constructor(survey, user) {
    this.survey = survey;
    // this.guess = guess;
    this.user = user;
    this.isPlayerOneTurn = true;
    this.isPlayerTwoTurn = false;
    // this.answers = this.returnCurrentAnswers(questionID);
  }

  returnCurrentQuestion(questionID) {
    let currentQuestion = this.survey.surveys.find(el => el.id === questionID)
    return currentQuestion.question
  }

  returnCurrentAnswers(questionID){
    let currentAnswers = this.survey.answers.filter(el => el.surveyId === questionID)
    return currentAnswers.map(el => el.answer);
  }
  
  // selectSurvey() here or in game?
  
  changeTurns() {
    this.isPlayerOneTurn = !this.isPlayerOneTurn;
    this.isPlayerTwoTurn = !this.isPlayerTwoTurn;
    }

  returnGuess(guess) {
    return this.guess = guess;
  }
  
  evaluateGuess(questionID, answer) {
    return this.returnCurrentAnswers(questionID).includes(answer) ? true : false
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

  increaseScore(questionID, answer){
    if(this.evaluateGuess(questionID, answer) === true) {
      this.user.score += this.survey.answers.find(amount => amount.answer === answer).respondents;
      //DOM update display score
    }
  }

  finishRoundMessage() {
}

}

export default Round;