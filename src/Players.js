import domUpdates from "./domUpdates";
import $ from 'jquery';

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.ansInput = "what is";
  }
  validAns(clue, game) {
    this.findjQuery();
    if (this.ansInput.toLowerCase() === clue.answer.toLowerCase()) {
      this.score += clue.pointValue
      domUpdates.correctAns();
    } else {
      this.score -= clue.pointValue
      domUpdates.wrongAns();
    }
    domUpdates.updateScore(game);
    game.changeTurn();
  }
  findjQuery() {
    this.ansInput = $('#popup-input-js').val()
  }
}



export default Player;