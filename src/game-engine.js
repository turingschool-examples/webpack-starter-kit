
import Round from './round';
import Player from './player';


class GameEngine {
  constructor(playersNames) {
    this.playersNames = playersNames || [],
    this.players = [],
    this.currentRound = new Round(0);
  }
  revEngine() {
    this.loadPlayers();
  }
  newRound(game) {
    // ToDo:  Update roundCaps to Zero on DOM 
    // move newRound to round
    console.log(game)
    this.currentRound.roundNumber++;
    this.currentRound.determinePuzzleLength();
    this.currentRound.displayDomPuzzle(game);
    console.log(game.currentRound);

  }
  loadPlayers() {
    this.players = this.playersNames.map((player, ind) => {
      return this.players[ind] = new Player(player, (ind + 1));
    });
  }
}

export default GameEngine;