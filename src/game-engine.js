
import data from './data_wheel-of-fortune';
import Round from './round';


class GameEngine {
  constructor(players) {
    this.players = players || [],
    // this.rounds = [1, 2, 3, 4, 5]
    this.currentRound = new Round(0)
  }
  revEngine() {
    // create a method and pass in a new round nubmer with the increment
  }
  newRound(){
    this.currentRound.roundNumber++;
  }
}

export default GameEngine;