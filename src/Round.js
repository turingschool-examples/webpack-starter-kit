import domUpdates from "./domUpdates";
import Game from "./Game.js"

class Round {
  constructor(survey, surveyAnswers) {
    this.survey = survey;
    this.surveyAnswers = surveyAnswers; 
    this.guesses = [];
    this.correctGuesses = 0;
  }
      
  saveGuess(guess) {
    this.guesses.push(guess);
  }

  checkAnswer(guess, game) {
    const match = this.surveyAnswers.find(answerObj => 
      answerObj.answer.toLowerCase().includes(guess));

    if (match) {
      domUpdates.displayCorrectGuess(match.answer);
      this.correctGuesses++; 
      game.activePlayer.increaseScore(match.respondents);
      this.surveyAnswers.splice(this.surveyAnswers.indexOf(match), 1);
    } else if (this.guesses.includes(guess)) {
      domUpdates.showAlreadyTriedMsg();
    } else {
      domUpdates.showNoMatchMsg();
      game.toggleActivePlayer();
    }

    if (this.correctGuesses === 3) {
      this.endRound(game);
    }
  }

  endRound(game) {
    domUpdates.endOfRoundMsg();
    domUpdates.clearAnswerBoard();
    game.toggleActivePlayer();
    game.startNewRound();
  }
}

export default Round;