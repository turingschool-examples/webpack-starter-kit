// import Gameboard from './GameBoard.js'

class Player {
  constructor(round, point, avatar, name) {
    // super(round, point)
    this.name = name;
    this.avatar = avatar;
    this.turn = false;
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
  addPoints() {
    // keep track of player current points
    // add points
    // this.currentPoints + data.clue.pointValue
  }

  getNames() {
    $('#p1-name-change-js').text($('#p1-name-js'))
  }
}

export default Player;