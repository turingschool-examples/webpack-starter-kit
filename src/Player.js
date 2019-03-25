import domUpdates from './domUpdates.js';

class Player {
  constructor(name, num) {
    this.name = name;
    this.score = 0;
    this.playerNum = num;
    this.isTurn = false;
  }

  makeGuess(guess, game, round) {
    if (typeof guess !== 'string') {
      return 'Error: Argument Not String';
    } else if (this.checkGuess(round, guess)) {
      this.correctGuess(round, guess);
    } else {
      domUpdates.showGuessMessage('wrong');
    }
    game.toggleIsTurn();
  }

  checkGuess(round, guess) {
    return round.answers.map(a => a.answer.toUpperCase()).includes(guess.toUpperCase());
  }

  correctGuess(round, guess) {
    const correctAnswer = round.answers.find(a => a.answer.toUpperCase() === guess.toUpperCase());
    this.score += correctAnswer.respondents;
    round.answers.splice(round.answers.indexOf(correctAnswer), 1);
    domUpdates.revealCorrectAnswer(correctAnswer);
    domUpdates.updateScore(this.playerNum, this.score);
    domUpdates.showGuessMessage('correct');
  }

}

export default Player;