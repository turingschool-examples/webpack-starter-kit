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
    this.determinePuzzleLength();

  }
  determinePuzzleLength(){
    switch(this.roundNumber) {
      case 1: this.storePuzzle(data.puzzles.one_word_answers.puzzle_bank[Math.floor((Math.random() * 23)+0)]);
      break;
      case 2: this.storePuzzle(data.puzzles.two_word_answers.puzzle_bank[Math.floor((Math.random() * 23)+0)])
      break;
      case 3: this.storePuzzle(data.puzzles.three_word_answers.puzzle_bank[Math.floor((Math.random() * 23)+0)])
      break;
      case 4: this.storePuzzle(data.puzzles.four_word_answers.puzzle_bank[Math.floor((Math.random() * 23)+0)])
      break;
      case 5: this.storePuzzle(data.puzzles.one_word_answers.puzzle_bank[Math.floor((Math.random() * 23)+0)])
    }
  }
  storePuzzle(puzzle){
    this.getPuzzle(puzzle.category, puzzle.number_of_words, puzzle.total_number_of_letters, puzzle.first_word, puzzle.description, puzzle.correct_answer);
  }
  getPuzzle(category, wordNumber, totalLtrs, firstWordLtr, description, answer){
    this.roundPuzzle = new Puzzle(category, wordNumber, totalLtrs, firstWordLtr, description, answer);
  }
}
export default Round;