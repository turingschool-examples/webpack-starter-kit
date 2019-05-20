import Data from './Data';
import Turn from './Turn';

class Round {
  constructor(game, puzzle) {
    this.game = game;
    this.puzzle = puzzle;
  }

  newTurn() {
  const turn = new Turn(this, this.game.players[0]);
  this.currentTurn = turn;
  }

  endRound() {
    update this.game.roundCounter++
    this.game.start();
  }
}

export default Round;