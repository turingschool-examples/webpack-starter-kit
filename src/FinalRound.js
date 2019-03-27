import Round from './Round.js';
import domUpdates from './domUpdates.js';

class FinalRound extends Round {
  constructor(survey, answers) {
    super(survey, answers);
    this.timer = 0;
    this.correctGuesses = []
    this.incorrectGuesses = 0
  }

  startTimer(display, round, game) {
    var timer = 10, seconds;
    let timerInterval = setInterval(function () {
      timer--;
      seconds = parseInt(timer % 60, 10);
      seconds = timer < 10 ? "0" + seconds : seconds;
      display.text(seconds);
      if (timer <= 0) {
        clearInterval(timerInterval);
        this.addTotalScore(round, game);
      }
    }.bind(this), 1000);
  }

  addTotalScore(round, game) {
    if (game.player1.isTurn) {
      round.correctGuesses.sort((a, b) => {
        return b.respondents - a.respondents
      }).forEach((guess, index) => {
        setTimeout(function () {
          game.player1.score += guess.respondents;
          domUpdates.revealCorrectAnswer(guess);
          domUpdates.updateScore(1, game.player1.score);
        }, (index + 1) * 1000)
      });  
    } else {
      round.correctGuesses.forEach(guess => {
        game.player2.score += guess.respondents;
        domUpdates.revealCorrectAnswer(guess);
        domUpdates.updateScore(1, game.player2.score);
      }); 
    }
    
  }

  declareWinner() {

  }
}

export default FinalRound;