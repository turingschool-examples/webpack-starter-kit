class Game {
  constructor(){
    this.currentTurn = 'p1';
  }
  startGame(){

  }
  restartGame(){

  }
  whoseTurn(){
    if (this.currentTurn === 'p2'){
      this.currentTurn = 'p1';
    } else {
      this.currentTurn = 'p2';
    }
  }
}

export default Game;