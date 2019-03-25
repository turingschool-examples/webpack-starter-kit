
import Round from './round';
import Player from './player';
import DomUpdates from './dom-updates';


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
    // console.log('total caps : ', game.currentRound.currentPlayer.totalCaps)
    // console.log('round caps : ', game.currentRound.currentPlayer.roundCaps)
    game.currentRound.currentPlayer.totalCaps = game.currentRound.currentPlayer.totalCaps += game.currentRound.currentPlayer.roundCaps;
    // game.players.map(player => console.log(player));
    game.players.map(player=> player.roundCaps = 0);
    DomUpdates.updatePlayerScore(game);
    // game.players.map(player => console.log(player));
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