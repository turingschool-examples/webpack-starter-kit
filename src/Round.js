import Data from './Data';

class Round {
  constructor(game, puzzle) {
    this.game = game;
    this.puzzle = puzzle;
  }

  newTurn(this, this.game.player[0]) {
    // instantiate new Turn(this, player)
  }

  endRound() {
    // update this.game.roundCounter;
    // this.game.start();
  }
}

export default Round;