import Round from "./Round";
import LightningRound from './LightningRound';
import domUpdates from './domUpdates'

class Game {

  constructor(player1, player2, surveys) {
    this.players = [player1, player2];
    this.surveys = surveys;
    this.round = 0;
    this.currentRound = null;
    this.currentPlayer = null;
  }

  startGame() {
    this.shuffle(this.surveys);
    this.startNextRound();
  }

  startNextRound() {
    this.round++;
    this.currentRound = new Round(this.surveys[this.round - 1]);
    this.currentPlayer = this.setRoundPlayer();
    domUpdates.startRound(this.round, this.currentRound, this.currentPlayer);
  }

  startNextLightningRound() {
    this.round++;
    this.currentRound = new LightningRound(this.surveys[this.round - 1]);
    if (this.round === 3) {
      this.currentPlayer = this.setLightningRoundPlayer();
    }
    domUpdates.startRound(this.round, this.currentRound, this.currentPlayer);
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
    domUpdates.switchPlayer();
  }

  setRoundPlayer() {
    return this.round === 1 ? this.players[0] : this.players[1];
  }

  setLightningRoundPlayer() {
    return this.players[0].score >= this.players[1].score ? this.players[1] : this.players[0];
  }

  getWinner() {
    let winner;
    const expr = this.players[0].score - this.players[1].score;
    if (Math.sign(expr) === 1) {
      winner = this.players[0];
    } else if (Math.sign(expr) === -1) {
      winner = this.players[1];
    }
    return winner;
  }

  checkRoundStatus(round) {
    if (round.isFinished) {
      if (this.round < 2) {
        setTimeout(() => {
          domUpdates.toggleNextRoundModal();
        }, 3000)
      } else if (this.round < 3) {
        setTimeout(() => {
          domUpdates.toggleLightningRoundModal();
        }, 3000);
      }
      domUpdates.updateModal(this.players);
    }
  }

}

export default Game;