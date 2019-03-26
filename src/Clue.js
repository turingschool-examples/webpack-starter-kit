import Rounds from './Rounds.js'

class Clue {
  constructor(clue) {
    this.question = clue.question;
    this.pointValue = clue.pointValue;
    this.answer = clue.answer;
  }

  checkAnswer() {
    //this.playerguess = playerinput.value
    // boolean of this.answer === this.playerguess
  }

}

export default Clue;
