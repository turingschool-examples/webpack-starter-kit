
import data from './data_wheel-of-fortune';
import Round from './round';
import Player from './player';

/*
data.wheel => wheel array of values
data.puzzles.one_word_answers.puzzle_bank => array of puzzle objects 
! goes up to four_word_answers !

*/

class GameEngine {
  constructor(playersNames) {
    this.playersNames = playersNames || [],
    this.players = [],
    this.rounds = [1, 2, 3, 4, 5],
    this.currentRound = this.rounds[0]
  }
  revEngine() {
    this.rounds[0] = new Round(this.rounds[0]);
    this.loadPlayers();
  }
  getPuzzle() {
    
  }
  loadPlayers() {
    this.players = this.playersNames.map((player, ind) => {
      return this.players[ind] = new Player(player, (ind + 1));
    });
  }
}

export default GameEngine;