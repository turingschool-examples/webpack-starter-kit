import data from './data';
import Wheel from './wheel';
import Question from './question';
import domUpdates from './domUpdates';
import Player from './player';

class Game {
  constructor() {
    this.players = [];
    this.round = 0;
    this.allQs = [];
    this.allRounds = [1, 2, 3, 4, 5];
    this.playerIndex = 0;
    // this.currentPlayer = null;
    this.currentQuestion;
    this.currentPrize;
  }

  startRound() {
    this.populateQuestions();
    this.instantiatePlayers();
    domUpdates.appendNames();
    this.newQ();
  }

  populateQuestions() {
    Object.values(data.puzzles).forEach(p => {
      p.puzzle_bank.forEach(puz => this.allQs.push(puz))
    });
    this.allQs.sort(() => 0.5 - Math.random());
  }
  
  generatePrize() {
    let wheel = new Wheel();
    this.currentPrize = wheel.spin();
    this.currentPrize = 'LOSE A TURN';
    if (this.currentPrize === 'BANKRUPT') {
      this.players[this.playerIndex].totalScore = 0;
      console.log('bankrupt: ', this.players[this.playerIndex]);
      this.changeTurn();
    } else if (this.currentPrize === 'LOSE A TURN') {
      console.log('lose a turn: ', this.players[this.playerIndex]);
      this.changeTurn();
      console.log('lose a turn: ', this.players[this.playerIndex]);
    }
  }

  validateAnswer() {
    if (domUpdates.getAnswer().toUpperCase() === this.currentQuestion.answer.toUpperCase()) {
      console.log('correct!')
      this.players[this.playerIndex];
      console.log(this.players[this.playerIndex]);
      // alert player was correct
      // change round, instantiate new round with new question
    } else {
      console.log('incorrect!')
      // Player.subtractScore();
      // change player turn
    }
    this.changeTurn();
    console.log(this.players[this.playerIndex]);
  }

  changeTurn() {
    this.playerIndex === 2 
      ? this.playerIndex = 0
      : this.playerIndex++;
  }

  instantiatePlayers() {
    this.players = domUpdates.getNames();
    this.players = this.players.map(p => {
      return p = new Player(p)
    });
  }

  changeRound() {
    this.round++ && this.newQ();
    if (this.round === 6) {
      this.round = 1
    }
  }

  newQ() {
    let q = this.allQs.sort(() => 0.5 - Math.random()).pop();
    this.currentQuestion = new Question(q.correct_answer, q.total_number_of_letters, [], q.description, q.category);
    domUpdates.updateQInfo(this.currentQuestion);
  }

}

export default Game;