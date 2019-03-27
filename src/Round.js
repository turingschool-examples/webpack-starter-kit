import domUpdates from "./domUpdates";
import Game from "./Game.js"

class Round {
  constructor(survey, surveyAnswers, game) {
    this.survey = survey;
    this.surveyAnswers = surveyAnswers;
    this.game = game; 
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
    this.game.activePlayer.increaseScore(match.respondents);
    this.surveyAnswers.splice(this.surveyAnswers.indexOf(match), 1);
  }

  getRoundNextStep() {
    if (this.game.currentRound < 3) {
      this.game.toggleActivePlayer();
    }
  }

  checkRoundProgress() {
    if (this.surveyAnswers.length === 0) { 
      this.generateEndRoundMsg();
      setTimeout(() => {
        this.game.triggerNewRound();
      }, 1500);
    } 
  }

  generateEndRoundMsg() {
    if (this.game.player1.score > this.game.player2.score) {
      var roundWinner = this.game.player1.name;
    } else {
      var roundWinner = this.game.player2.name;
    }
    domUpdates.endOfRoundMsg(roundWinner, this.game);
  }
}

export default Round;