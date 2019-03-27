import data from './data';
import Wheel from './wheel';
import Question from './question';
import domUpdates from './domUpdates';
import Player from './player';
import BonusWheel from './bonusWheel';

class Game {
  constructor() {
    this.players = [];
    this.round = 1;
    this.allQs = [];
    this.allRounds = [1, 2, 3, 4, 5];
    this.playerIndex = 0;
    this.currentQuestion;
    this.currentPrize;
    this.ltrArr = [];
  }

  startRound() {
    this.populateQuestions();
    this.instantiatePlayers();
    domUpdates.appendNames();
    this.newQ();
    domUpdates.updateActivePlayer(this.playerIndex);
  }

  populateQuestions() {
    Object.values(data.puzzles).forEach(p => {
      p.puzzle_bank.forEach(puz => this.allQs.push(puz))
    });
    this.allQs.sort(() => 0.5 - Math.random());
  }
  
  generatePrize() {
    if (this.round === 2) {
      let bonusWheel = new BonusWheel();
      this.currentPrize = bonusWheel.changePrizes();
    } else {
      let wheel = new Wheel();
      this.currentPrize = wheel.spin();
      if (this.currentPrize === 'BANKRUPT') {
        this.players[this.playerIndex].totalScore = 0;
        this.changeTurn();
      } else if (this.currentPrize === 'LOSE A TURN') {
        this.changeTurn();
      }
    }
  }

  validateAnswer() {
    if (domUpdates.getAnswer().toUpperCase() === this.currentQuestion.answer.toUpperCase()) {
      domUpdates.showAnser();
      this.players[this.playerIndex].totalScore += this.players[this.playerIndex].currentScore
      domUpdates.updateBank(this.playerIndex, this.players[this.playerIndex].totalScore)
      this.players.forEach((p, i) => {
        p.currentScore = 0
        domUpdates.updateScore(i, p.currentScore)
      })
      this.changeRound();
      setTimeout(()=> this.newQ(), 3);
    } else {
      console.log('incorrect!')
    }
    this.changeTurn();
  }

  checkConsonant(vowel) {
    let elem = Object.values(domUpdates.getBoard());
    let consonantGuess = domUpdates.getConsonant() || vowel;
    let noMatches = elem.find(el => el.textContent === consonantGuess);
    elem.forEach(e => {
      if (e.textContent === consonantGuess) {
        domUpdates.clearClass(e);
        domUpdates.correctAns();
        this.players[this.playerIndex].currentScore += this.currentPrize;
      } else if (!this.ltrArr.includes(consonantGuess)) {
        this.ltrArr.push(consonantGuess);
      }
    })
    domUpdates.appendLetters(this.ltrArr);
    if (noMatches === undefined) {
      domUpdates.wrongAns();
      this.changeTurn();
    } else if (!['BANKRUPT', 'LOSE A TURN'].includes(this.currentPrize)) {
      domUpdates.updateScore(this.playerIndex, this.players[this.playerIndex].currentScore);
    }
  }

  changeTurn() {
    this.playerIndex === 2 
      ? this.playerIndex = 0
      : this.playerIndex++;
    domUpdates.updateActivePlayer(this.playerIndex);
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
    if (this.round === 2) {
      domUpdates.showBonusRound();
    }
  }

  newQ() {
    let q = this.allQs.sort(() => 0.5 - Math.random()).pop();
    this.currentQuestion = new Question(q.correct_answer, q.total_number_of_letters, [], q.description, q.category);
    domUpdates.clearFields();
    domUpdates.updateQInfo(this.currentQuestion);
    console.log(this.currentQuestion.answer)
  }
}

export default Game;