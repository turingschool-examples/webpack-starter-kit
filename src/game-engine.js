
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
    this.currentRound.roundNumber++;
    game.currentRound.allRoundGuesses = [];
    this.currentRound.determinePuzzleLength();
    this.currentRound.displayDomPuzzle(game);
  }
  loadPlayers() {
    this.players = this.playersNames.map((player, ind) => {
      return this.players[ind] = new Player(player, (ind + 1));
    });
  }
}

export default GameEngine;