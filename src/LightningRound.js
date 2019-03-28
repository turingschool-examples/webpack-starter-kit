import domUpdates from './domUpdates.js';


class LightningRound {
  constructor(survey) {
    this.multiplier = 2;
    this.questionSet = survey;
    this.answerCount = 0;
  }

  checkLrAnswer(guess, currentPlayer, game) {
    let answers = this.questionSet.answers;
    let score;
    domUpdates.clearInputField();
    let correctAnswer = answers.find(answer => (guess.toLowerCase() === answer.answer.toLowerCase())); 
    domUpdates.highlightPlayer(currentPlayer.playerId);
    console.log(correctAnswer);
    if (correctAnswer) {
      score = correctAnswer.respondents;
      let mult = score * this.multiplier;
      currentPlayer.addScore(mult);
      this.answerCount++
      domUpdates.appendAnswer(answers, correctAnswer.answer, correctAnswer.respondents);
    } else {
      domUpdates.tryAgain(); 
      }
    if (guess === '') {
      domUpdates.errorMessage();
    }

    if (this.answerCount === 3) {
      this.endRound(game);
    }
  }

  endRound(game) {
    game.createRound();
    this.answerCount = 0;
  }
}


export default LightningRound;