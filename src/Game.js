import gameData from './data.js';
import domObject from './DOMupdates.js';
import Round from './Round.js';

let round = new Round;

class Game {
  constructor(){
    this.currentTurn = 'p1';
    // this.game = Object.assign(gameData);
  }
  startGame(){
    round.generateRound();
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
};




export default Game;