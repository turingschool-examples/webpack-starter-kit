import Round from './Round.js';
import domUpdates from './domUpdates.js';



class LightningRound extends Round {
  constructor(survey, currentPlayer, multiplier) {
    super(survey,currentPlayer, multiplier);
    this.questionSet = survey;
    this.multiplier = multiplier;
    this.currentPlayer = currentPlayer;
    // this.answerCount = 0;
  }

  checkLrAnswer(guess, game) {
    let answers = this.questionSet.answers;
    console.log('LR answers', answers)
    let score;
    domUpdates.clearInputField();
    let correctAnswer = answers.find(answer => (guess.toLowerCase() === answer.answer.toLowerCase())); 
    domUpdates.highlightPlayer(this.currentPlayer.playerId);
    //needs to iluminate upon game creation for player 1 and should be removed when player switches
    console.log(correctAnswer);
    if (correctAnswer) {
      console.log('LR correct')
      let score = correctAnswer.respondents;
      this.currentPlayer.addScore(score);
      this.answerCount++;
      domUpdates.appendAnswer(answers, correctAnswer.answer, correctAnswer.respondents);
    } else {
      console.log('incorrect')
      domUpdates.tryAgain();
    }

    if(this.answerCount === 3){
      this.endRound(game);
    }
  }

  endRound(game) {
    game.lightningRound();
    this.answerCount = 0;
  }
}

export default LightningRound;