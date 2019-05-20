import Data from './Data';

class Turn {
  constructor(round, player) {
    this.round = round;
    this.player = player;
    this.currentScore = 0;
  }

  spinWheel() {
    const result = this.round.game.wheel.returnResult();
    if (typeof result === 'number') {
      this.updateMoney(result);
    } else if (result == 'BANKRUPT') {
      this.goBankrupt(result);
    } else {
      this.endTurn(nextPlayer);
    }
    return result;
  }

  buyVowel(vowel, cost) {
    this.currentScore -= cost;
    this.letterGuessCheck(vowel);
  }

  solvePuzzle(guess) {
    if (this.round.puzzle.evaluateSolve(guess) === true) {
      this.round.endRound()
    } else {
      this.endTurn(nextPlayer)
    }
  }
  
  updateMoney(value) {
    this.currentScore += value;
  }

  goBankrupt(value) {
    this.currentScore = 0;
    this.endTurn();
  }

  endTurn(player = this.player) {
    const newTurn = new Turn(this.currentRound, player)
  }

  letterGuessCheck(guess) {
      if (this.round.puzzle.evaluateLetter(guess) === true) {
        this.player.roundScore += this.currentScore;
        this.endTurn();
      } else {
        this.endTurn(next Player);
      }
  }

}

export default Turn;