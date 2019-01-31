class Game {
  constructor(name = "Jeopardy") {
    this.name = name;
  }

  startGame(){
    console.log("You've started the game!");
    return true;
  };

  finishGame(){

  };

  exitGame(){

  };

}

export default Game;