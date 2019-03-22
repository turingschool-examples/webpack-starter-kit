
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
    this.rounds = [1, 2, 3, 4, 5]
  }
  revEngine() {
    this.currentRound = new Round(this.rounds[0]);
  }
}

export default GameEngine;