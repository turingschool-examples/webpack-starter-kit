
import data from './data_wheel-of-fortune';
import Round from './round';


class GameEngine {
  constructor(players) {
    this.players = players || [],
    this.rounds = [1, 2, 3, 4, 5]
  }
  revEngine() {
    
    this.rounds.findIndex(i)
    this.currentRound = new Round(this.rounds[i]);
  }
}

export default GameEngine;