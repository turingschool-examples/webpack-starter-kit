class Game {
  constructor(){
    this.currentTurn = '';
  }
  startGame(){
    //import the data structures
    //copy the data structures
    //select 1 survey at random and remove it from the source array
    //append the question to the DOM
    //create a array with the three associated answers and remove them from source array
  }
  restartGame(){
    //clear all fields
    //revert back to starting arrays
  }
  whoseTurn(){
    if (this.currentTurn === 'p2'){
      //inputs and fields should reflect that it's players X's turn
      //player Y disabled
    } else {
      //inputs and fields should reflect that it's players Y's turn
      //player X disabled
    }
  }
}

export default Game;