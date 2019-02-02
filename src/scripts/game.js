import Wheel from './wheel.js'
import Player from './player.js'

class Game {
  constructor() {
    this.round = 1;
    this.players = {};
    this.wheel = [];
    this.puzzleBank = [];
  }

  startGame() {
    this.wheel = new Wheel();
    this.wheel.createSpaces();
  }

  createPlayers(playerNames) {
    playerNames.forEach((name) => {
      this.players[name] = new Player(name)    
    })
  }

  // resetWheel() {
  //  // wheel.reset()
  // }

  // createWheel(){
  //   //create a new instance of wheel
  //   //set that wheel to equal this.wheel
  // }
   
}
export default Game;
