import domUpdates from "./domUpdates";
import Game from "./Game.js"

class Round {
  constructor(survey, surveyAnswers) {
    this.survey = survey;
    this.surveyAnswers = surveyAnswers; 
  }

  checkAnswer(guess) {
    const match = this.surveyAnswers.find(answerObj => 
      answerObj.answer.toLowerCase().includes(guess.toLowerCase()));
                                                  
    if (match) {
      this.processWin(match);
      this.checkRoundProgress();
    } else {
      domUpdates.showNoMatchMsg();
      this.getRoundNextStep();
    }
  }

  processWin(match) {
    domUpdates.displayCorrectGuess(match.answer); 
    window.game.activePlayer.increaseScore(match.respondents);
    this.surveyAnswers.splice(this.surveyAnswers.indexOf(match), 1);
  }

  getRoundNextStep() {
    if (window.game.currentRound < 3) {
      window.game.toggleActivePlayer();
    }
  }

  checkRoundProgress() {
    if (this.surveyAnswers.length === 0) { 
      domUpdates.endOfRoundMsg();
      setTimeout(() => {
        window.game.triggerNewRound();
      }, 1000);
    } 
  }

  endRound(game) {
    domUpdates.endOfRoundMsg();
    domUpdates.clearAnswerBoard();
    game.toggleActivePlayer();
    game.triggerNewRound();
  }
}

export default Round;