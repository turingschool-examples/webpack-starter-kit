import data from './data';

class Game {
  constructor() {
    this.players = [];
    this.round = 0;
    this.allRounds = [1, 2, 3, 4, 5];
    this.playerIndex = 0;
    this.currentPlayer = 0;
  }

  changeTurn() {
    this.playerIndex++
    if (this.currentPlayer === 3) {
      this.currentPlayer = 0;
    }
  }
}

export default Game;