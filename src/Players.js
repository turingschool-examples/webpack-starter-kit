import domUpdates from "./domUpdates";

class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
  }
  validAns(clue, game) {
      if ($('#popup-input-js').val().toLowerCase() === clue.answer.toLowerCase()) {
        this.score += clue.pointValue
        domUpdates.correctAns();
      } else {
        this.score -= clue.pointValue
        domUpdates.wrongAns();
      }
      domUpdates.updateScore(game);
      game.changeTurn();
  }
}



export default Player;