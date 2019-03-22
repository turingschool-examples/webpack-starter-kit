import Puzzle from "./puzzle";
import data from './data_wheel-of-fortune';

/*
data.wheel => wheel array of values
data.puzzles.one_word_answers.puzzle_bank => array of puzzle objects 
! goes up to four_word_answers !
*/

class Round {
  constructor(roundNumber) {
    this.roundNumber = roundNumber;
  }
  getPuzzle(puzzle){
    this.puzzle = new Puzzle(puzzle);
  }
}
export default Round;