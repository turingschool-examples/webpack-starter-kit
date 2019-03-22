import Round from "./Round";
import LightningRound from './LightningRound';
import Player from './Player';
import domUpdates from './domUpdates'

import data from './data';

class Game {

  constructor(player1, player2) {
    this.players = [player1, player2];
    this.round = 0;
    this.currentPlayer = this.players[0].number;
  }

  startGame() {
    this.surveys = data.surveys.reduce( (total, { id, question }) => {
      total.push({
        id,
        question,
        responses: data.answers.filter(({ surveyId }) => id === surveyId)
      })
      return total
    }, []);

    this.shuffleArray(this.surveys);

    this.round++
    this.startNextRound(this.surveys, this.round);
  }

  startNextRound(surveys, round) {
    this.currentRound = new Round(round, surveys[round - 1]);
    domUpdates.displayCurrentQuestion(this.currentRound.question);
  }

  shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }

  switchPlayer() {
    this.currentPlayer = this.currentPlayer === 1 ? 2 : 1;
  }

}

export default Game;