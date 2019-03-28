import domUpdates from './domUpdates.js';

class Round {
  constructor(survey) {
    this.questionSet = survey;
    this.answerCount = 0;
  }


  checkAnswer(guess, currentPlayer, game) {
    let answers = this.questionSet.answers;
    let score;
    domUpdates.clearInputField();
    let correctAnswer = answers.find(answer => (guess.toLowerCase() === answer.answer.toLowerCase())); 
    if (correctAnswer) {
        score = correctAnswer.respondents;
        currentPlayer.addScore(score);
        this.answerCount++
        domUpdates.appendAnswer(answers, correctAnswer.answer, correctAnswer.respondents);
    } else {
        domUpdates.wrongAnswer();
        game.switchPlayer();  
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

export default Round;