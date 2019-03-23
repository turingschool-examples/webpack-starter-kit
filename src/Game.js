import Round from "./Round";
import LightningRound from './LightningRound';
import Player from './Player';
import domUpdates from './domUpdates'

import data from './data';

class Game {

  constructor(player1, player2) {
    this.players = [player1, player2];
    this.round = 0;
    this.currentPlayer = this.players[0];
  }

  startGame() {
    this.surveys = data.surveys.reduce( (total, { id, question }) => {
      total.push({
        id,
        question,
        responses: data.answers.filter(({ surveyId }) => id === surveyId).sort((a, b) => b.respondents - a.respondents)
      })
      return total
    }, []);
    this.shuffle(this.surveys);
    this.startNextRound();
  }

  startNextRound() {
    this.round++;
    this.currentRound = new Round(this.round, this.surveys[this.round - 1]);
    console.log(this);
    domUpdates.displayCurrentQuestion(this.currentRound.question);
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
    console.log(this.currentPlayer);
  }

}

export default Game;