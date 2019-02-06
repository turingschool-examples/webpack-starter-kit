import domUpdates from "./domUpdates";

class Player {
  constructor(name, score) {
    this.name = name;
    this.score = score;
  }

  newTurn() {
    // a new turn will begin once a player has entered an answer (correct || incorrect)
    // after the pop up disappears and the question's square has been hidden from the board...
    // the next player will pick their question
    // we will compare the answers in question/question-test
    // once they have been compared, we can either add || subtract points based on the value of the question
    // when the player clicked the submit answer button, the popup will disappear (animate?)
    // and the box will hide from the gameboard (animate?)
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
  }



export default Player;