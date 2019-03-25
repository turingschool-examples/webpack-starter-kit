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
    } else if (round.answers.map(a=>a.answer.toUpperCase()).includes(guess.toUpperCase())) {
      const correctAnswer = round.answers.find(a => a.answer.toUpperCase() === guess.toUpperCase());
      this.score += correctAnswer.respondents;
      domUpdates.revealCorrectAnswer(correctAnswer);
      domUpdates.updateScore(this.playerNum, this.score);
      domUpdates.showGuessMessage('correct');
    } else {
      domUpdates.showGuessMessage('wrong');
    }
    game.toggleIsTurn();
  }

}

export default Player;