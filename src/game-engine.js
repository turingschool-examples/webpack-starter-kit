
import Round from './round';
import Player from './player';


class GameEngine {
  constructor(playersNames) {
    this.playersNames = playersNames || [],
    this.players = [],
    this.currentRound = new Round(0);
  }
  revEngine() {
    this.rounds[0] = new Round(this.rounds[0]);
    this.loadPlayers();
  }
  newRound(){
    this.currentRound.roundNumber++;
  }
  loadPlayers() {
    this.players = this.playersNames.map((player, ind) => {
      return this.players[ind] = new Player(player, (ind + 1));
    });
  }
}

export default GameEngine;