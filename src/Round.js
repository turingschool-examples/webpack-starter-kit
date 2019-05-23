import domUpdates from './domUpdates';
import Game from './Game';
import User from './User';
import Turn from './Turn';

class Round {
  constructor(game, survey, user1, user2) {
    this.game = game;
    this.survey = survey;
    this.answers = this.survey.answers
    this.users = [user1, user2];
    this.currentPlayer = null;
  }

  updateCurrentPlayer() {
    if(this.currentPlayer === null) {
      this.currentPlayer = this.users[0];
    } else if (game.roundCount === 2) {
      this.currentPlayer = this.users[1];
    }
  }
  
  changeTurn() {
    let index = this.users.indexOf(this.currentPlayer);
    this.currentPlayer = this.users[1-index];
    let turn = new Turn (this.currentPlayer, this);
  }

  eliminateGuessedAnswer(index) {
    if (this.answers.length > 0) {
      return this.answers.splice(index, 1)
    } else {
      this.game.updateRound();
    }
  }
  
  evaluateIfChangeTurnsNeeded() {
    // let turn = new Turn(this.surveys);
    if (this.currentPlayer === this.users[0] && turn.evaluateGuess() === true) {
      this.currentPlayer = this.users[0]
    } else if (this.currentPlayer === this.users[0] && turn.evaluateGuess() === false) {
      this.currentPlayer = this.users[1]
    } else if (this.currentPlayer === this.users[1] && turn.evaluateGuess() === true) {
      this.currentPlayer = this.users[1]
    } else if (this.currentPlayer === this.users[1] && turn.evaluateGuess() === false) {
      this.currentPlayer = this.users[0]
    }
  }

  increaseScore(guess) {
    if(this.currentPlayer === this.users[0]) {
      user.score += this.survey.answers.find(amount => amount.answer === guess).respondents;
    }
  }

  finishRoundMessage() {
}

}

export default Round;