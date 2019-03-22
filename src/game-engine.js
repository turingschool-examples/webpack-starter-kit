
import data from './data_wheel-of-fortune';
import Round from './round';

/*
data.wheel => wheel array of values
data.puzzles.one_word_answers.puzzle_bank => array of puzzle objects 
! goes up to four_word_answers !

*/

class GameEngine {
  constructor(players) {
    this.players = players || [],
    this.rounds = [1, 2, 3, 4, 5],
    this.currentRound = this.rounds[0]
  }
  revEngine() {
    this.rounds[0] = new Round(this.rounds[0]);
    console.log(this.rounds[0]);
  }
  getPuzzle() {
    
  }
}

export default GameEngine;