import domUpdates from './domUpdates.js';
import $ from 'jquery';

class Player {
  constructor(name, num) {
    this.name = name;
    this.score = 0;
    this.playerNum = num;
    this.isTurn = false;
    this.multiplier = 1;
  }

  makeGuess(guess, game, round) {
    if (this.checkGuess(round, guess)) {
      this.correctGuess(round, guess);
    } else {
      domUpdates.showGuessMessage('wrong');
    }
    game.toggleIsTurn();
  }

  makeFinalGuess(guess, game, round) {
    if (round.correctGuesses.length === 0 && round.incorrectGuesses === 0) {
      round.startTimer($(".timer"), round, game);
    }
    if (this.checkGuess(round, guess)) {
      const correctAnswer = round.answers.find(a => a.answer.toUpperCase() === guess.toUpperCase());
      round.correctGuesses.push(correctAnswer);
    } else {
      round.incorrectGuesses++;
    }
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

  getMultiplier(n) {
    this.multiplier = n;
  }

}

export default Player;