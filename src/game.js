import Gameboard from './gameboard.js';

class Game {
  constructor(name = "Jeopardy", round = 1) {
    this.name = name;
    this.round = round;
  };

  startGame() {
    console.log("You've started the game!");
    var newGameboard = new Gameboard();
    newGameboard.appendGameboard();
    return true;
  };

  finishGame() {

  };

  exitGame() {

  };

  changePlayer() {
    //Will need method to change player active status
  }

}

export default Game;

//Game will start round, and choose player to start (like change state to active for turn).
//Change turn method - after player1's turn, assign player2's turn.