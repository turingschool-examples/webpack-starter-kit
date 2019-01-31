class Player extends Gameboard {
  constructor(round, point, avatar) {
    super(round, point)
    this.avatar = avatar;
    this.turn = false;
  }
  newTurn(){
    // a new turn will begin once a player has entered an answer (correct || incorrect)
    // after the pop up disappears and the question's square has been hidden from the board...
    // the next player will pick their question
    // we will compare the answers in question/question-test
    // once they have been compared, we can either add || subtract points based on the value of the question
    // when the player clicked the submit answer button, the popup will disappear (animate?)
    // and the box will hide from the gameboard (animate?)
  }
}

export default Player;