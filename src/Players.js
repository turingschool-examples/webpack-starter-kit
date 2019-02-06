import domUpdates from "./domUpdates";

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }
  validAns(ans, game) {
      if ($('#popup-input-js').val().toLowerCase() === ans.toLowerCase()) {
        domUpdates.correctAns();
      } else {
        domUpdates.wrongAns();
      }
      this.scorePoints();
      game.changeTurn();
    }

    scorePoints() {
      // for chosen clue value,
        // if ans is correct
          // add point vavlue to current players score
          // this.pointValue += this.player.score
        // if ans is incorrect
          // subtract value from current score
          // this.pointValue -= this.player.score
  }
  
  scorePoints() {
    // for chosen clue value,
    // if ans is correct
    // add point vavlue to current players score
    // this.pointValue += this.player.score
    // if ans is incorrect
    // subtract value from current score
    // this.pointValue -= this.player.score
  }
}



export default Player;