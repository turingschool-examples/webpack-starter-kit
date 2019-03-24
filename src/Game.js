import Round from "./Round";
import LightningRound from './LightningRound';
import Player from './Player';
import domUpdates from './domUpdates'

import data from './data';

class Game {

  constructor(player1, player2) {
    this.number = 0;
    this.players = [player1, player2];
    this.round = 0;
    this.currentPlayer = this.players[this.number];
    this.surveys = [];
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
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  switchPlayer() {
    this.number = this.number === 0 ? 1 : 0;
    this.currentPlayer = this.players[this.number]
    console.log(this.currentPlayer)
  }

}

export default Game;