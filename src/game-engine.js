
import Round from './round';


class GameEngine {
  constructor(players) {
    this.players = players || [];
    this.currentRound = new Round(0);
  }
  newRound(){
    this.currentRound.roundNumber++;
  }
}

export default GameEngine;