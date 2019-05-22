import domUpdates from './domUpdates';
import Game from './Game';
import User from './User';
import Turn from './Turn';

class Round {
  constructor(game, surveys, user1, user2) {
    this.game = game;
    this.surveys = surveys || [];
    this.users = [user1, user2];
    this.currentPlayer = null;
  }

  updateCurrentPlayer() {
    let turn = new Turn(this.surveys);
    if(this.currentPlayer === null) {
      this.currentPlayer = this.users[0];
    }
  }

  returnRemainingAnswers(questionID, answer) {
    if (this.evaluateGuess(questionID, answer) === true) {
      
    } 
  }
  
  evaluateIfChangeTurnsNeeded() {
    let turn = new Turn(this.surveys);
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