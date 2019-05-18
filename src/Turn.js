import Data from './Data';

class Turn {
  constructor(round, player) {
    this.round = round;
    this.player = player;
    this.currentScore = 0;
  }

  spinWheel() {
    // value of wheel
    // conditional deciding which method to run with value
  }

  buyVowel(vowel) {
    // subtract cost of vowel from this.currentScore
    // this.letterGuessCheck(vowel);
  }

  solvePuzzle(guess) {
    // this.round.puzzle.evaluateSolve(guess) === boolean
    // if true, this.round.endRound()
    // if false, this.endTurn(next Player)
  }
  
  updateMoney(value) {
    // Update currentScore with spin result
  }

  goBankrupt(value) {
    // reset currentScore and end turn
  }

  endTurn(player = this.player) {
    // new Turn(round, appropraite Player)
  }


  letterGuessCheck(guess) {
    // this.round.puzzle.evaluateLetter(guess) === boolean
    // if true this.endTurn()
    // if false this.endTurn(next Player)
  }

}

export default Turn;