import Round from "./Round";
import LightningRound from './LightningRound';
import domUpdates from './domUpdates'

class Game {

  constructor(player1, player2, surveys) {
    this.players = [player1, player2];
    this.surveys = surveys;
    this.round = 0;
  }

  startGame() {
    this.shuffle(this.surveys);
    this.startNextRound();
  }

  startNextRound() {
    this.round++;
    this.currentRound = new Round(this.surveys[this.round - 1]);
    this.currentPlayer = this.currentRound.setPlayer(this.round, this.players);
    domUpdates.startRound(this.currentRound, this.currentPlayer);
  }

  startNextLightningRound() {
    this.round++;
    this.currentRound = new LightningRound(this.surveys[this.round - 1]);
    this.currentPlayer = this.currentRound.setPlayer(this.round, this.players);
    domUpdates.startRound(this.currentRound, this.currentPlayer);
  }

  shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  switchPlayers() {
    if (this.currentPlayer === this.players[0]) {
      this.currentPlayer = this.players[1];
    } else {
      this.currentPlayer = this.players[0];
    }
    domUpdates.displayCurrentPlayer(this.currentPlayer);
  }

  getWinner() {
    let winner;
    const expr = this.players[0].score - this.players[1].score;

    switch (Math.sign(expr)) {
      case 1:
        winner = this.players[0];
        break;
      case -1:
        winner = this.players[1];
        break;
      default:
        winner = 'Draw';
        break;
    }
    return winner;
  }

}

export default Game;