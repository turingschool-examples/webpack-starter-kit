import Puzzle from "./puzzle";
import data from './data_wheel-of-fortune';

/*
data.wheel => wheel array of values
data.puzzles.one_word_answers.puzzle_bank => array of puzzle objects 
! goes up to four_word_answers !
*/

class Round {
  constructor(currentRound) {
    this.roundNumber = currentRound;

  }
  determinePuzzleLength(){
    switch(this.roundNumber) {
      case 1: console.log(1);
      break;
      case 2: console.log(2);
      break;
      case 3: console.log(3);
      break;
      case 4: console.log(4);
      break;
      case 5: console.log(5);
    }
  }
  getPuzzle(category, wordNumber, totalLtrs, firstWordLtr, description, answer){
    this.roundPuzzle = new Puzzle(category, wordNumber, totalLtrs, firstWordLtr, description, answer);
    
  }
}
export default Round;