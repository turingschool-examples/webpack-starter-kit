import Gameboard from './gameboard.js';

class Game {
  constructor(name = "Jeopardy", round = 1) {
    this.name = name;
    this.round = round;
  };

  startGame(){
    console.log("You've started the game!");
    var newGameboard = new Gameboard();
    return true;
  };

  finishGame(){

  };

  exitGame(){

  };

}

export default Game;